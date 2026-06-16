# data/ — Context

## students.js
Exports a single `students` array. This is the only source of truth for mock student data.

## Student object shape
```js
{
  id: 'ahmed',              // unique string, used as React key + activeStudentId value
  name: 'Ahmed',
  initials: 'AH',
  level: 'B1',
  focus: 'Sales',           // displayed as "B1 · Sales" in the sidebar
  avatar: {
    bg: '#EEEDFE',          // hardcoded accent — see CLAUDE.md for palette
    text: '#3C3489',
  },
  isActiveSession: true,    // only one student has this true (drives the badge)
}
```

## Rules
- Keep exactly 4 students (Ahmed, Sara, Khalid, Layla) to match the brief.
- One student has `isActiveSession: true` — Ahmed.
- Each student gets a unique avatar color from the four accent pairs in CLAUDE.md.
- Do not add API calls or async logic here — this is static mock data only.
