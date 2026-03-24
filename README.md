# Zone 2

A personalised running training app. Answer a few questions about your goal, fitness level, schedule, and any injuries — and Zone 2 builds you a training plan and coaches you through it week by week.

---

## What it does

- **Personalised plan generator** — goal (5K / 10K / half marathon / general fitness), fitness level, active days per week, rest days, fixed commitments, and injury history all shape the plan
- **Evidence-based training** — walk/run intervals for beginners, 80/20 easy/hard split, 10% volume rule, deload every 3–4 weeks, taper before race week
- **Weekly coach briefing** — context-aware guidance above the calendar: what this week is for, feedback on last week, injury reminders, phase context
- **Recovery schedule** — post-run stretch/foam roll suggestions and rest-day mobility work, separate from active session count
- **Session logging** — tap a session to log duration, distance, and notes; duration pre-fills from the plan
- **Progress charts** — completion %, run minutes, and streak across the full plan

---

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire app — questionnaire, plan generator, tracker, coach |
| `favicon.svg` | App icon |
| `README.md` | This file |

`schedule.js` and `config.js` are no longer used and can be deleted from your repo if present.

---

## Hosting on GitHub Pages

1. Create a GitHub repo (public or private)
2. Upload `index.html` and `favicon.svg`
3. Go to **Settings → Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose `main` branch, `/ (root)` folder → **Save**
6. Live at `https://yourusername.github.io/your-repo-name/`

Pages usually deploys within 1–2 minutes. After pushing updates, do a hard refresh (`Cmd+Shift+R` / `Ctrl+Shift+R`) to bust the cache.

---

## How the plan works

On first visit, a 7-step questionnaire collects:

1. **Goal** — 5K, 10K, half marathon, or general fitness
2. **Fitness level** — beginner, intermediate, or advanced
3. **Active days per week** — 1–5 (run + pilates + strength; yoga/stretching excluded)
4. **Rest days** — days that stay completely free
5. **Fixed sessions** — existing classes or commitments; tick "Account for" if the plan should schedule around them
6. **Injuries** — knee, lower back, shin/foot/ankle, or returning from injury (multi-select)
7. **Start date**

The plan is generated from these answers and stored in your browser. Every subsequent visit goes straight to the tracker. To start over, tap **↺ New plan** in the header.

---

## Data & storage

All data lives in your browser's `localStorage` — nothing is sent anywhere. The plan profile and your session logs persist across visits as long as you use the same browser. Clearing browser data or using private/incognito mode will reset the app.

Two keys are stored:
- `_10k_app_v6_profile` — your questionnaire answers (~300 bytes)
- `_10k_app_v6_progress` — session tick-offs, logs, and current week

The schedule is regenerated from your profile answers on every load, so it's never stored directly.