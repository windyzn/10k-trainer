// ─────────────────────────────────────────────
//  config.js  —  edit this to change plan dates
//  and phase labels
// ─────────────────────────────────────────────

const CONFIG = {

  // The Monday your plan starts (year, month-1, day)
  startDate: new Date(2026, 2, 23),

  // Total number of weeks in the plan
  totalWeeks: 18,

  // Phase labels — each entry covers weeks up to `max`
  phases: [
    { max: 4,  label: "Phase 1 — Return" },
    { max: 8,  label: "Phase 2 — Build" },
    { max: 12, label: "Phase 3 — 5K ready" },
    { max: 18, label: "Phase 4 — 10K" },
  ],

};
