export const kits = [
  {
    level: 1,
    name: "Beginner",
    ages: "7+",
    price: "₹2,499",
    color: "text-circuit",
    blurb: "Snap-fit motors, sensors, and a friendly first robot. No soldering, no stress.",
    includes: ["Line-follower chassis", "2 DC motors", "IR sensors", "Battery pack", "12 guided builds"],
  },
  {
    level: 2,
    name: "Explorer",
    ages: "9+",
    price: "₹3,999",
    color: "text-sky",
    blurb: "Meet the microcontroller. Write your first block-based programs and make robots react.",
    includes: ["Arduino-compatible board", "Ultrasonic sensor", "Servo arm", "Buzzer & LEDs", "18 guided builds"],
  },
  {
    level: 3,
    name: "Builder",
    ages: "11+",
    price: "₹5,999",
    color: "text-volt",
    blurb: "Move to real code. Bluetooth control, PID balancing, and multi-sensor missions.",
    includes: ["Bluetooth module", "Gyro + accelerometer", "Metal chassis", "Motor driver", "24 guided builds"],
  },
  {
    level: 4,
    name: "Innovator",
    ages: "13+",
    price: "₹8,999",
    color: "text-signal",
    blurb: "Computer vision, Wi-Fi robots, and your own invention — competition-ready hardware.",
    includes: ["ESP32 board", "Camera module", "Robotic gripper", "Li-ion power system", "Open-ended projects"],
  },
];

export const lessons = [
  { title: "What is a robot?", track: "Foundations", minutes: 8, xp: 50 },
  { title: "Circuits & current", track: "Electronics", minutes: 12, xp: 80 },
  { title: "Motors and gears", track: "Mechanics", minutes: 10, xp: 70 },
  { title: "Your first sensor", track: "Electronics", minutes: 14, xp: 90 },
  { title: "Loops and conditions", track: "Coding", minutes: 15, xp: 100 },
  { title: "Line-following logic", track: "Coding", minutes: 18, xp: 120 },
  { title: "Balancing with PID", track: "Control", minutes: 22, xp: 160 },
  { title: "Seeing with a camera", track: "AI & Vision", minutes: 25, xp: 200 },
];

export const builds = [
  { name: "Line Runner", kit: "Beginner", steps: 9, time: "45 min", difficulty: 1 },
  { name: "Obstacle Dodger", kit: "Explorer", steps: 12, time: "1 hr", difficulty: 2 },
  { name: "Robo Arm", kit: "Explorer", steps: 14, time: "1.5 hr", difficulty: 2 },
  { name: "Self-Balancer", kit: "Builder", steps: 18, time: "2 hr", difficulty: 3 },
  { name: "Phone-Controlled Rover", kit: "Builder", steps: 16, time: "2 hr", difficulty: 3 },
  { name: "Color-Sorting Bot", kit: "Innovator", steps: 22, time: "3 hr", difficulty: 4 },
];

export const challenges = [
  { title: "Maze Master", desc: "Program your bot to escape a 4×4 maze without touching the walls.", xp: 300, days: 3, done: false },
  { title: "Speed Sprint", desc: "Fastest line-follower lap on the official track wins.", xp: 200, days: 5, done: true },
  { title: "Sensor Detective", desc: "Use only one sensor to identify three hidden objects.", xp: 250, days: 7, done: false },
  { title: "Gentle Gripper", desc: "Pick up an egg and move it 1 metre without cracking it.", xp: 400, days: 10, done: false },
];

export const competitions = [
  { name: "School Robo Cup", tier: "School", date: "Nov 16, 2026", place: "Your school", prize: "Certificates + kits" },
  { name: "City Bot Battle", tier: "Local", date: "Dec 12, 2026", place: "Dehradun", prize: "₹25,000 pool" },
  { name: "National Junior Robotics League", tier: "National", date: "Feb 6, 2027", place: "New Delhi", prize: "₹2,00,000 pool" },
  { name: "Global Young Makers Challenge", tier: "International", date: "May 2027", place: "Online + Singapore", prize: "Trip + mentorship" },
];

export const scholarships = [
  { name: "First Kit Free", award: "Free Beginner kit", who: "Students from under-resourced schools", deadline: "Rolling" },
  { name: "Mentor Match", award: "6 months 1:1 mentorship", who: "Top challenge performers", deadline: "Dec 31, 2026" },
  { name: "Competition Sponsor", award: "Travel + entry fees", who: "National qualifiers", deadline: "Jan 15, 2027" },
];

export const workshops = [
  { title: "Build Your First Robot", date: "Oct 18, 2026", mode: "In person", seats: 12, mentor: "Aditi R." },
  { title: "Intro to Arduino Coding", date: "Oct 25, 2026", mode: "Online", seats: 40, mentor: "Rahul S." },
  { title: "Sensors Deep Dive", date: "Nov 1, 2026", mode: "Online", seats: 30, mentor: "Meera K." },
  { title: "Competition Bootcamp", date: "Nov 8, 2026", mode: "In person", seats: 16, mentor: "Arjun P." },
];

export const badges = [
  { name: "First Spark", desc: "Completed your first lesson", earned: true },
  { name: "Wire Wizard", desc: "Finished 5 electronics lessons", earned: true },
  { name: "Bot Builder", desc: "Completed your first build", earned: true },
  { name: "Code Cadet", desc: "Wrote your first program", earned: true },
  { name: "Maze Master", desc: "Solved the maze challenge", earned: false },
  { name: "Podium Finish", desc: "Placed top 3 in a competition", earned: false },
  { name: "Mentor's Pick", desc: "Featured by a mentor", earned: false },
  { name: "Innovator", desc: "Reached Level 4", earned: false },
];

export const leaderboard = [
  { name: "Ishaan", xp: 4820 },
  { name: "Ananya", xp: 4510 },
  { name: "You", xp: 3260 },
  { name: "Kabir", xp: 3105 },
  { name: "Zara", xp: 2890 },
];

export const weeklyXp = [
  { day: "Mon", xp: 120 },
  { day: "Tue", xp: 80 },
  { day: "Wed", xp: 200 },
  { day: "Thu", xp: 150 },
  { day: "Fri", xp: 90 },
  { day: "Sat", xp: 310 },
  { day: "Sun", xp: 240 },
];
