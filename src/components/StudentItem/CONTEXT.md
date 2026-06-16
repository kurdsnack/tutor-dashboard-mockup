# StudentItem — Context

## Layout
- `display: flex; align-items: center; gap: 10px`
- `padding: 6px 12px`
- Cursor: pointer
- Full-width row inside the sidebar student list

## Avatar circle
- 28×28px, `border-radius: 50%`
- Background and text color from `student.avatar.bg` / `student.avatar.text` — applied as inline style
- Initials text: `font-size: 11px; font-weight: 600; text-transform: uppercase`

## Name + level line
- Name: `font-size: 13px`, `var(--color-text-primary)`
- Level line: `font-size: 11px`, `var(--color-text-tertiary)`, format: `"B1 · Sales"`
- Stacked in a `flex-direction: column` wrapper

## Log icon button
- Right-aligned (`margin-left: auto`)
- Small icon button, `var(--color-text-tertiary)` on rest, `var(--color-text-secondary)` on hover
- Always visible (not hover-only) for the mockup

## Active state
- Background: subtle fill, e.g. `rgba(255,255,255,0.05)`
- Border: `1px solid var(--color-border-secondary)` or left accent stripe — choose what looks best
- `border-radius: var(--border-radius-md)`

## Props
- `student` — single student object
- `isActive` — boolean
- `onSelect` — callback(student.id)
