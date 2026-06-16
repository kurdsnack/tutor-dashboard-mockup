# ChatSection — Context

## Layout
- Fixed-height bottom strip, `border-top: 1px solid var(--color-border-tertiary)`
- Background: `var(--color-background-primary)`
- `padding: 14px 20px; display: flex; flex-direction: column; gap: 10px`
- Does NOT scroll — always visible at the bottom of the main column

## Controls row (top row inside ChatSection)
`display: flex; align-items: center; gap: 10px`

### Output type `<select>`
- Options: Lesson plan / Slide deck / Worksheet / Assessment / Progress report
- `font-size: 12px; padding: 5px 10px`
- `border-radius: var(--border-radius-md)`
- Background: `var(--color-background-secondary)`, border: `var(--color-border-secondary)`
- Color: `var(--color-text-secondary)`

### Context pill
- Displays: icon + `"Ahmed · B1 · Sales"` (built from activeStudent)
- `font-size: 12px; padding: 4px 10px; border-radius: 9999px`
- Background: `var(--color-background-secondary)`, border: `1px solid var(--color-border-secondary)`
- Color: `var(--color-text-secondary)`
- User icon (person silhouette) to the left of text

## Input row (bottom row)
`display: flex; align-items: flex-end; gap: 10px`

### Textarea
- `rows={2}; resize: none`
- `flex: 1; font-size: 13px; padding: 9px 12px`
- `border-radius: var(--border-radius-md)`
- Background: `var(--color-background-secondary)`, border: `1px solid var(--color-border-secondary)`
- Color: `var(--color-text-primary)`
- Placeholder: `"Plan a vocabulary warm-up for Ahmed's next Sales session..."`
- Focus: border switches to `var(--color-border-primary)`

### Send button
- 34×34px fixed, `border-radius: var(--border-radius-md)`
- Background: `var(--color-text-primary)` (light fill = stands out on dark bg)
- Icon: up-arrow, color: `var(--color-background-primary)` (inverted)
- No text label

## Props received from App
- `activeStudent` — full student object (for context pill)
- `outputType` — string
- `onOutputTypeChange` — callback(value)
