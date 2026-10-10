# 🤖 Mechabuddy

**Build Robots. Build Futures.**

Mechabuddy is a robotics education platform that combines hands-on kits, AI-powered mentorship, gamified learning, workshops, competitions, and scholarships — turning curious kids into confident engineers.

---

## ✨ Features

- **🤖 AI Buddy** — An AI robotics mentor powered by Google Gemini that explains concepts in kid-friendly language, gives hints (not answers), and guides students through builds step by step.
- **📦 Progressive Kit System** — Four carefully designed levels (Beginner → Explorer → Builder → Innovator) for ages 7+.
- **🏆 Gamified Learning** — XP, badges, leaderboards, and challenges to keep kids motivated.
- **🎥 Human Tutorials** — Step-by-step video guides from expert builders.
- **🏅 Competitions** — School, local, national, and international robotics events.
- **🎓 Scholarships** — Free kits, mentorship, and sponsorship for promising students.
- **🔧 Workshops** — Hands-on sessions with expert mentors.

## 🛠️ Tech Stack

| Layer       | Technology                                      |
|-------------|--------------------------------------------------|
| Framework   | [Next.js 16](https://nextjs.org/) (App Router)  |
| Language    | TypeScript 5                                     |
| Styling     | Tailwind CSS 4                                   |
| AI          | [Google Gemini API](https://ai.google.dev/) (`@google/genai`) |
| Animations  | Framer Motion                                    |
| Charts      | Recharts                                         |
| Icons       | Lucide React                                     |

## 📁 Project Structure

```
mechabuddy/
├── public/              # Static assets (SVGs, favicon)
├── src/
│   ├── app/
│   │   ├── achievements/    # Achievements page
│   │   ├── ai-buddy/        # AI Buddy chat interface
│   │   ├── api/ai-buddy/    # AI Buddy API route (Gemini)
│   │   ├── build/           # Build projects page
│   │   ├── challenges/      # Challenges page
│   │   ├── competitions/    # Competitions page
│   │   ├── kits/            # Robotics kits page
│   │   ├── learn/           # Learning resources page
│   │   ├── profile/         # User profile page
│   │   ├── scholarships/    # Scholarships page
│   │   ├── workshops/       # Workshops page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   └── components/
│       ├── Footer.tsx
│       └── Navigation.tsx
├── .env.example         # Environment variable template
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/mechabuddy.git
cd mechabuddy

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your Gemini API key (optional — the app works without it)

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Environment Variables

| Variable         | Required | Description                        |
|------------------|----------|------------------------------------|
| `GEMINI_API_KEY` | Optional | Google Gemini API key for AI Buddy |

> **Note:** The AI Buddy works without a Gemini API key — it falls back to intelligent, topic-aware offline responses.

## 📜 Available Scripts

| Command          | Description                 |
|------------------|-----------------------------|
| `npm run dev`    | Start dev server            |
| `npm run build`  | Production build            |
| `npm run start`  | Start production server     |
| `npm run lint`   | Run ESLint                  |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary. All rights reserved.

---

<p align="center">Made with ❤️ by the Mechabuddy Team</p>
