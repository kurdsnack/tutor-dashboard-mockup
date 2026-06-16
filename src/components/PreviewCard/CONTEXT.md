# PreviewCard — Context

## Layout
- Full-width card: `border: 1px solid var(--color-border-tertiary)`
- `border-radius: var(--border-radius-lg); padding: 20px`
- Background: `var(--color-background-primary)`

## Title
- Format: `"B1 Lesson Plan — Sales Vocabulary · Ahmed"`
- Built from `activeStudent.level`, `activeStudent.focus`, `activeStudent.name`
- `font-size: 14px; font-weight: 600; color: var(--color-text-primary); margin-bottom: 20px`

## Sections
Four sections, each with:
- Section label: `font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-tertiary); margin-bottom: 8px`
- Separator: `border-bottom: 1px solid var(--color-border-tertiary); margin-bottom: 16px` (before each section except first)

### Section list
1. **Objectives** — 3 skeleton lines: full, med, short
2. **Warm-up (10 min)** — 2 skeleton lines: full, med
3. **Main activity (25 min)** — 3 skeleton lines: full, med, short
4. **Focus areas from last session** — tag pills (no skeleton lines)

## Skeleton lines
```css
.skeletonLine {
  height: 10px;
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    var(--color-background-secondary) 25%,
    color-mix(in srgb, var(--color-background-secondary) 60%, var(--color-text-tertiary) 40%) 50%,
    var(--color-background-secondary) 75%
  );
  background-size: 800px 100%;
  animation: shimmer 1.6s infinite linear;
  margin-bottom: 8px;
}
.full  { width: 100%; }
.med   { width: 80%; }
.short { width: 60%; }
```
(`shimmer` keyframe is defined in `src/styles/global.css`)

## Tag pills (Focus areas section)
Inline-flex row, `gap: 8px; flex-wrap: wrap`.

Each pill:
- `font-size: 11px; padding: 3px 10px; border-radius: 9999px; font-weight: 500`
- Hardcoded accent colors (not tokens):

| Tag | bg | text |
|---|---|---|
| "Negotiation phrases" | `#FAEEDA` | `#633806` |
| "Follow-up emails" | `#E1F5EE` | `#085041` |
| "Conditionals" | `#EEEDFE` | `#3C3489` |

Note: these are light-mode pill colors from the brief. On dark backgrounds they pop nicely — keep them as-is.

## Props
- `activeStudent` — full student object
