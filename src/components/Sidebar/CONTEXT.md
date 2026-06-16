# Sidebar — Context

## Layout
- Fixed `200px` width, `border-right: 1px solid var(--color-border-tertiary)`
- Background: `var(--color-background-secondary)` (slightly lighter than main)
- Full height, `display: flex; flex-direction: column`

## Sections (top to bottom)
1. **Header** — padded area with "STUDENTS" label + "Add student" button
2. **Student list** — `overflow-y: auto; flex: 1` — maps `StudentItem` for each student
3. **Active session badge** — pinned to bottom with `margin-top: auto`

## "STUDENTS" label
- `font-size: 11px`, `text-transform: uppercase`, `letter-spacing: 0.08em`
- Color: `var(--color-text-tertiary)`

## "Add student" button
- Full width, dashed border (`border: 1px dashed var(--color-border-secondary)`)
- Icon (+ or similar) + text "Add student"
- Color: `var(--color-text-secondary)`
- `border-radius: var(--border-radius-md)`
- Subtle hover: slight background fill

## Active session badge
- `padding: 12px 16px`, `border-top: 1px solid var(--color-border-tertiary)`
- Green dot (8px circle, `background: #22c55e`, `border-radius: 50%`)
- Text: `"Ahmed · active session"`, 11px, `var(--color-text-secondary)`

## Props received from App
- `students` — array from `src/data/students.js`
- `activeStudentId` — string
- `onSelectStudent` — callback(id)
