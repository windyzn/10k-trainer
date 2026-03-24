// ─────────────────────────────────────────────
//  schedule.js  —  your full 18-week plan
//
//  Days: 0=Mon  1=Tue  2=Wed  3=Thu  4=Fri  5=Sat  6=Sun
//  Types: "run" | "pilates" | "yoga" | "strength"
//
//  To edit a session: find the week, find the day,
//  change the label. To add a session, add a new
//  entry. To remove one, delete the line.
// ─────────────────────────────────────────────

const SCHEDULE = {

  // ── Phase 1: Return to running (weeks 1–4) ──

  "1": [
    { day: 0, type: "run",     label: "Run 1 min / walk 2 min ×8" },
    { day: 1, type: "pilates", label: "Weighted pilates" },
    { day: 2, type: "run",     label: "Run 1 min / walk 2 min ×8" },
    { day: 4, type: "run",     label: "Run 1 min / walk 2 min ×9" },
    { day: 5, type: "yoga",    label: "Yoga — recovery" },
  ],
  "2": [
    { day: 0, type: "run",     label: "Run 2 min / walk 2 min ×7" },
    { day: 1, type: "pilates", label: "Weighted pilates" },
    { day: 2, type: "run",     label: "Run 2 min / walk 1 min ×8" },
    { day: 4, type: "run",     label: "Run 2 min / walk 2 min ×8" },
    { day: 5, type: "yoga",    label: "Yoga — recovery" },
  ],
  "3": [
    { day: 0, type: "run",      label: "Run 3 min / walk 2 min ×6" },
    { day: 1, type: "pilates",  label: "Weighted pilates" },
    { day: 2, type: "run",      label: "Run 3 min / walk 1 min ×7" },
    { day: 3, type: "strength", label: "Strength 20 min" },
    { day: 4, type: "run",      label: "Run 4 min / walk 2 min ×5" },
    { day: 5, type: "yoga",     label: "Yoga — recovery" },
  ],
  "4": [
    { day: 0, type: "run",  label: "Run 3 min / walk 2 min ×5" },
    { day: 2, type: "yoga", label: "Yoga — deload" },
    { day: 4, type: "run",  label: "Run 5 min / walk 3 min ×3" },
    { day: 5, type: "yoga", label: "Yoga — recovery" },
  ],

  // ── Phase 2: Build continuous running (weeks 5–8) ──

  "5": [
    { day: 0, type: "run",     label: "10 min easy" },
    { day: 1, type: "pilates", label: "Weighted pilates" },
    { day: 2, type: "run",     label: "12 min easy" },
    { day: 4, type: "run",     label: "15 min easy" },
    { day: 5, type: "yoga",    label: "Yoga — recovery" },
  ],
  "6": [
    { day: 0, type: "run",      label: "14 min easy" },
    { day: 1, type: "pilates",  label: "Weighted pilates" },
    { day: 2, type: "run",      label: "16 min easy" },
    { day: 3, type: "strength", label: "Strength 20 min" },
    { day: 4, type: "run",      label: "20 min easy" },
    { day: 5, type: "yoga",     label: "Yoga — recovery" },
  ],
  "7": [
    { day: 0, type: "run",     label: "16 min easy" },
    { day: 1, type: "pilates", label: "Weighted pilates" },
    { day: 2, type: "run",     label: "18 min moderate" },
    { day: 4, type: "run",     label: "25 min easy" },
    { day: 5, type: "yoga",    label: "Yoga — recovery" },
  ],
  "8": [
    { day: 0, type: "run",  label: "12 min easy" },
    { day: 2, type: "yoga", label: "Yoga — deload" },
    { day: 4, type: "run",  label: "20 min easy" },
    { day: 5, type: "yoga", label: "Yoga — recovery" },
  ],

  // ── Phase 3: 5K ready (weeks 9–12) ──

  "9": [
    { day: 0, type: "run",     label: "20 min easy" },
    { day: 1, type: "pilates", label: "Weighted pilates" },
    { day: 2, type: "run",     label: "22 min tempo" },
    { day: 4, type: "run",     label: "28 min easy" },
    { day: 5, type: "yoga",    label: "Yoga — recovery" },
  ],
  "10": [
    { day: 0, type: "run",      label: "20 min easy" },
    { day: 1, type: "pilates",  label: "Weighted pilates" },
    { day: 2, type: "run",      label: "25 min tempo" },
    { day: 3, type: "strength", label: "Strength 20 min" },
    { day: 4, type: "run",      label: "32 min easy" },
    { day: 5, type: "yoga",     label: "Yoga — recovery" },
  ],
  "11": [
    { day: 0, type: "run",     label: "22 min easy" },
    { day: 1, type: "pilates", label: "Weighted pilates" },
    { day: 2, type: "run",     label: "25 min tempo" },
    { day: 4, type: "run",     label: "36 min easy" },
    { day: 5, type: "yoga",    label: "Yoga — recovery" },
  ],
  "12": [
    { day: 0, type: "run",  label: "20 min easy" },
    { day: 2, type: "yoga", label: "Yoga — rest" },
    { day: 4, type: "run",  label: "5K — race day!" },
    { day: 5, type: "yoga", label: "Yoga — recovery" },
  ],

  // ── Phase 4: 10K build (weeks 13–18) ──

  "13": [
    { day: 0, type: "run",     label: "25 min easy" },
    { day: 1, type: "pilates", label: "Weighted pilates" },
    { day: 2, type: "run",     label: "30 min tempo" },
    { day: 4, type: "run",     label: "40 min easy" },
    { day: 5, type: "yoga",    label: "Yoga — recovery" },
  ],
  "14": [
    { day: 0, type: "run",      label: "25 min easy" },
    { day: 1, type: "pilates",  label: "Weighted pilates" },
    { day: 2, type: "run",      label: "30 min tempo" },
    { day: 3, type: "strength", label: "Strength 20 min" },
    { day: 4, type: "run",      label: "45 min easy" },
    { day: 5, type: "yoga",     label: "Yoga — recovery" },
  ],
  "15": [
    { day: 0, type: "run",  label: "20 min easy" },
    { day: 1, type: "yoga", label: "Yoga — deload" },
    { day: 2, type: "run",  label: "20 min easy" },
    { day: 4, type: "run",  label: "30 min easy" },
    { day: 5, type: "yoga", label: "Yoga — recovery" },
  ],
  "16": [
    { day: 0, type: "run",     label: "28 min easy" },
    { day: 1, type: "pilates", label: "Weighted pilates" },
    { day: 2, type: "run",     label: "32 min tempo" },
    { day: 4, type: "run",     label: "50 min easy" },
    { day: 5, type: "yoga",    label: "Yoga — recovery" },
  ],
  "17": [
    { day: 0, type: "run",      label: "28 min easy" },
    { day: 1, type: "pilates",  label: "Weighted pilates" },
    { day: 2, type: "run",      label: "32 min tempo" },
    { day: 3, type: "strength", label: "Strength 20 min" },
    { day: 4, type: "run",      label: "55 min easy" },
    { day: 5, type: "yoga",     label: "Yoga — recovery" },
  ],
  "18": [
    { day: 0, type: "run",  label: "20 min easy" },
    { day: 1, type: "yoga", label: "Yoga — taper" },
    { day: 2, type: "run",  label: "Race prep 15 min" },
    { day: 4, type: "yoga", label: "Rest & stretch" },
    { day: 5, type: "run",  label: "10K — race day!" },
  ],

};
