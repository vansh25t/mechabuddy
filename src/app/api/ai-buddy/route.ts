import { GoogleGenAI } from "@google/genai";

type ChatMessage = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `You are AI Buddy, a friendly robotics mentor for kids aged 7-16 on the Mechabuddy platform.
- Explain concepts in simple, kid-friendly language with everyday analogies.
- Give hints and guiding questions instead of full answers, so students figure things out themselves.
- Guide builds step by step and encourage safe practices (unplug power before rewiring, ask an adult for tools).
- Keep replies short (under 120 words), upbeat, and use the occasional emoji.
- Only discuss robotics, electronics, coding, science, and learning. Politely redirect anything else.`;

const fallbacks: { keywords: string[]; reply: string }[] = [
  {
    keywords: ["motor", "wheel", "spin", "gear"],
    reply:
      "Motors turn electricity into spinning motion! ⚙️ Hint: if your robot goes in circles, check whether both motors spin the same direction. What happens if you swap the two wires on one motor?",
  },
  {
    keywords: ["sensor", "ultrasonic", "ir", "detect", "line"],
    reply:
      "Sensors are your robot's eyes and ears! 👀 An IR sensor sees light vs. dark, and an ultrasonic sensor measures distance with sound echoes, like a bat. Which one would help your robot follow a black line?",
  },
  {
    keywords: ["code", "program", "loop", "if", "arduino"],
    reply:
      "Code is a list of instructions your robot follows really fast. 💻 A loop repeats instructions, and an if-statement makes decisions. Try writing in plain words first: \"IF something is close, THEN ___\". What goes in the blank?",
  },
  {
    keywords: ["battery", "power", "led", "circuit", "wire"],
    reply:
      "Electricity needs a complete loop, called a circuit, to flow. 🔋 If something isn't lighting up, trace the path from + back to −. Is there a gap anywhere? (Always unplug power before changing wires!)",
  },
];

function offlineReply(message: string) {
  const text = message.toLowerCase();
  const match = fallbacks.find((f) => f.keywords.some((k) => text.includes(k)));
  return (
    match?.reply ??
    "Great question! 🤖 Let's break it into small steps. What is your robot supposed to do, and what is it doing right now? Spotting the difference is the first step every engineer takes."
  );
}

export async function POST(req: Request) {
  let messages: ChatMessage[];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages.slice(-12) : [];
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const last = messages.at(-1);
  if (!last || last.role !== "user" || typeof last.content !== "string" || !last.content.trim()) {
    return Response.json({ error: "A user message is required" }, { status: 400 });
  }

  if (!process.env.GEMINI_API_KEY) {
    return Response.json({ reply: offlineReply(last.content), offline: true });
  }

  try {
    const ai = new GoogleGenAI({});
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: String(m.content).slice(0, 2000) }],
      })),
      config: { systemInstruction: SYSTEM_PROMPT },
    });
    return Response.json({ reply: response.text ?? offlineReply(last.content) });
  } catch (error) {
    console.error("AI Buddy request failed", error);
    return Response.json({ reply: offlineReply(last.content), offline: true });
  }
}
