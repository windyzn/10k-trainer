# 10K Training Tracker

A personal running plan tracker — 18 weeks from walk/run intervals to a 10K finish.

## Files

| File | What it does |
|---|---|
| `index.html` | The tracker UI — you rarely need to touch this |
| `schedule.js` | Your full 18-week session plan — **edit this to change sessions** |
| `config.js` | Start date, phase names, total weeks — **edit this to change dates** |

---

## Hosting on GitHub Pages

1. Create a new GitHub repo (can be private or public)
2. Upload all three files (`index.html`, `schedule.js`, `config.js`)
3. Go to **Settings → Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose `main` branch, `/ (root)` folder → click **Save**
6. Your tracker will be live at `https://yourusername.github.io/your-repo-name/`

GitHub Pages usually takes 1–2 minutes to deploy on first publish.

---

## Editing the plan

### Change a session label
Open `schedule.js`, find the week, find the day, update the `label` string.

```js
// Before
{ day: 0, type: "run", label: "10 min easy" },

// After
{ day: 0, type: "run", label: "12 min easy" },
```

### Add a session
Add a new line to the week's array:

```js
"5": [
  { day: 0, type: "run",     label: "10 min easy" },
  { day: 1, type: "pilates", label: "Weighted pilates" },
  { day: 1, type: "yoga",    label: "Evening yoga" },   // ← added
  ...
],
```

### Remove a session
Delete the line.

### Change session type
Types are: `"run"` · `"pilates"` · `"yoga"` · `"strength"`

### Change your start date
Open `config.js` and update `startDate`:

```js
startDate: new Date(2026, 2, 23),  // year, month-1 (so March = 2), day
```

### Change phase names
In `config.js`, edit the `label` fields in the `phases` array.

---

## Days of the week

In `schedule.js`, `day` maps to:

| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Mon | Tue | Wed | Thu | Fri | Sat | Sun |

---

## Your logged data

Session logs and tick-offs are saved in your browser's `localStorage`. They persist across visits as long as you use the same browser. They are **not** synced to GitHub — the repo only holds the plan structure.
