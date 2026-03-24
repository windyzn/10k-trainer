// ─────────────────────────────────────────────
//  schedule.js  —  your full 18-week plan
//
//  Days: 0=Mon  1=Tue  2=Wed  3=Thu  4=Fri  5=Sat  6=Sun
//  Types: "run" | "pilates" | "strength" | "yoga"
//
//  Weekly rhythm:
//    Mon — run
//    Tue — pilates or strength
//    Wed — rest (or very light yoga)
//    Thu — run
//    Fri — run (longer on build weeks)
//    Sat — rest
//    Sun — rest
//
//  Yoga is treated as recovery, not a workout.
//  It appears as a small add-on to run days or
//  on rest days — never as the sole session.
//
//  "duration" = total session time in minutes (run only).
// ─────────────────────────────────────────────

const SCHEDULE = {

    // ── Phase 1: Return to running (weeks 1–4) ──
    // Walk/run intervals. Light week — only 3 short runs + pilates.

    "1": [
        { day: 0, type: "run", label: "Run 1 min / walk 2 min ×8", duration: 24 },
        { day: 0, type: "yoga", label: "Yoga — evening stretch" },
        { day: 1, type: "pilates", label: "Weighted pilates" },
        { day: 3, type: "run", label: "Run 1 min / walk 2 min ×8", duration: 24 },
        { day: 4, type: "run", label: "Run 1 min / walk 2 min ×9", duration: 27 },
        { day: 4, type: "yoga", label: "Yoga — evening stretch" },
    ],
    "2": [
        { day: 0, type: "run", label: "Run 2 min / walk 2 min ×7", duration: 28 },
        { day: 0, type: "yoga", label: "Yoga — evening stretch" },
        { day: 1, type: "pilates", label: "Weighted pilates" },
        { day: 3, type: "run", label: "Run 2 min / walk 1 min ×8", duration: 24 },
        { day: 4, type: "run", label: "Run 2 min / walk 2 min ×8", duration: 32 },
        { day: 4, type: "yoga", label: "Yoga — evening stretch" },
    ],
    "3": [
        { day: 0, type: "run", label: "Run 3 min / walk 2 min ×6", duration: 30 },
        { day: 0, type: "yoga", label: "Yoga — evening stretch" },
        { day: 1, type: "pilates", label: "Weighted pilates" },
        { day: 3, type: "run", label: "Run 3 min / walk 1 min ×7", duration: 28 },
        { day: 3, type: "strength", label: "Strength 20 min" },
        { day: 4, type: "run", label: "Run 4 min / walk 2 min ×5", duration: 30 },
        { day: 4, type: "yoga", label: "Yoga — evening stretch" },
    ],
    "4": [
        // Deload week — cut volume by ~30%
        { day: 0, type: "run", label: "Run 3 min / walk 2 min ×5", duration: 25 },
        { day: 0, type: "yoga", label: "Yoga — gentle recovery" },
        { day: 1, type: "yoga", label: "Yoga — gentle recovery" },
        { day: 4, type: "run", label: "Run 5 min / walk 3 min ×3", duration: 24 },
    ],

    // ── Phase 2: Build continuous running (weeks 5–8) ──
    // Drop walk intervals. Build to 25–30 min continuous.

    "5": [
        { day: 0, type: "run", label: "10 min easy", duration: 10 },
        { day: 0, type: "yoga", label: "Yoga — evening stretch" },
        { day: 1, type: "pilates", label: "Weighted pilates" },
        { day: 3, type: "run", label: "12 min easy", duration: 12 },
        { day: 4, type: "run", label: "15 min easy", duration: 15 },
        { day: 4, type: "yoga", label: "Yoga — evening stretch" },
    ],
    "6": [
        { day: 0, type: "run", label: "14 min easy", duration: 14 },
        { day: 0, type: "yoga", label: "Yoga — evening stretch" },
        { day: 1, type: "pilates", label: "Weighted pilates" },
        { day: 3, type: "run", label: "16 min easy", duration: 16 },
        { day: 3, type: "strength", label: "Strength 20 min" },
        { day: 4, type: "run", label: "20 min easy", duration: 20 },
        { day: 4, type: "yoga", label: "Yoga — evening stretch" },
    ],
    "7": [
        { day: 0, type: "run", label: "16 min easy", duration: 16 },
        { day: 0, type: "yoga", label: "Yoga — evening stretch" },
        { day: 1, type: "pilates", label: "Weighted pilates" },
        { day: 3, type: "run", label: "18 min moderate", duration: 18 },
        { day: 4, type: "run", label: "25 min easy", duration: 25 },
        { day: 4, type: "yoga", label: "Yoga — evening stretch" },
    ],
    "8": [
        // Deload week
        { day: 0, type: "run", label: "12 min easy", duration: 12 },
        { day: 0, type: "yoga", label: "Yoga — gentle recovery" },
        { day: 1, type: "yoga", label: "Yoga — gentle recovery" },
        { day: 4, type: "run", label: "20 min easy", duration: 20 },
    ],

    // ── Phase 3: 5K ready (weeks 9–12) ──
    // Introduce one tempo run per week.

    "9": [
        { day: 0, type: "run", label: "20 min easy", duration: 20 },
        { day: 0, type: "yoga", label: "Yoga — evening stretch" },
        { day: 1, type: "pilates", label: "Weighted pilates" },
        { day: 3, type: "run", label: "22 min tempo", duration: 22 },
        { day: 4, type: "run", label: "28 min easy", duration: 28 },
        { day: 4, type: "yoga", label: "Yoga — evening stretch" },
    ],
    "10": [
        { day: 0, type: "run", label: "20 min easy", duration: 20 },
        { day: 0, type: "yoga", label: "Yoga — evening stretch" },
        { day: 1, type: "pilates", label: "Weighted pilates" },
        { day: 3, type: "run", label: "25 min tempo", duration: 25 },
        { day: 3, type: "strength", label: "Strength 20 min" },
        { day: 4, type: "run", label: "32 min easy", duration: 32 },
        { day: 4, type: "yoga", label: "Yoga — evening stretch" },
    ],
    "11": [
        { day: 0, type: "run", label: "22 min easy", duration: 22 },
        { day: 0, type: "yoga", label: "Yoga — evening stretch" },
        { day: 1, type: "pilates", label: "Weighted pilates" },
        { day: 3, type: "run", label: "25 min tempo", duration: 25 },
        { day: 4, type: "run", label: "36 min easy", duration: 36 },
        { day: 4, type: "yoga", label: "Yoga — evening stretch" },
    ],
    "12": [
        // 5K race week — taper mid-week, race Friday
        { day: 0, type: "run", label: "20 min easy", duration: 20 },
        { day: 0, type: "yoga", label: "Yoga — taper stretch" },
        { day: 1, type: "yoga", label: "Yoga — taper stretch" },
        { day: 4, type: "run", label: "5K — race day!", duration: null },
    ],

    // ── Phase 4: 10K build (weeks 13–18) ──
    // Extend long run. Keep Wed/Sat/Sun clear.

    "13": [
        { day: 0, type: "run", label: "25 min easy", duration: 25 },
        { day: 0, type: "yoga", label: "Yoga — evening stretch" },
        { day: 1, type: "pilates", label: "Weighted pilates" },
        { day: 3, type: "run", label: "30 min tempo", duration: 30 },
        { day: 4, type: "run", label: "40 min easy", duration: 40 },
        { day: 4, type: "yoga", label: "Yoga — evening stretch" },
    ],
    "14": [
        { day: 0, type: "run", label: "25 min easy", duration: 25 },
        { day: 0, type: "yoga", label: "Yoga — evening stretch" },
        { day: 1, type: "pilates", label: "Weighted pilates" },
        { day: 3, type: "run", label: "30 min tempo", duration: 30 },
        { day: 3, type: "strength", label: "Strength 20 min" },
        { day: 4, type: "run", label: "45 min easy", duration: 45 },
        { day: 4, type: "yoga", label: "Yoga — evening stretch" },
    ],
    "15": [
        // Deload week
        { day: 0, type: "run", label: "20 min easy", duration: 20 },
        { day: 0, type: "yoga", label: "Yoga — gentle recovery" },
        { day: 1, type: "yoga", label: "Yoga — gentle recovery" },
        { day: 3, type: "run", label: "20 min easy", duration: 20 },
        { day: 4, type: "run", label: "30 min easy", duration: 30 },
    ],
    "16": [
        { day: 0, type: "run", label: "28 min easy", duration: 28 },
        { day: 0, type: "yoga", label: "Yoga — evening stretch" },
        { day: 1, type: "pilates", label: "Weighted pilates" },
        { day: 3, type: "run", label: "32 min tempo", duration: 32 },
        { day: 4, type: "run", label: "50 min easy", duration: 50 },
        { day: 4, type: "yoga", label: "Yoga — evening stretch" },
    ],
    "17": [
        { day: 0, type: "run", label: "28 min easy", duration: 28 },
        { day: 0, type: "yoga", label: "Yoga — evening stretch" },
        { day: 1, type: "pilates", label: "Weighted pilates" },
        { day: 3, type: "run", label: "32 min tempo", duration: 32 },
        { day: 3, type: "strength", label: "Strength 20 min" },
        { day: 4, type: "run", label: "55 min easy", duration: 55 },
        { day: 4, type: "yoga", label: "Yoga — evening stretch" },
    ],
    "18": [
        // Race week — taper fully. Race on Friday.
        { day: 0, type: "run", label: "20 min easy", duration: 20 },
        { day: 0, type: "yoga", label: "Yoga — taper stretch" },
        { day: 1, type: "yoga", label: "Yoga — taper stretch" },
        { day: 3, type: "run", label: "Race prep 15 min", duration: 15 },
        { day: 3, type: "yoga", label: "Yoga — rest & breathe" },
        { day: 4, type: "run", label: "10K — race day!", duration: null },
    ],

};