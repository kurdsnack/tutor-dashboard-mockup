# styles/ — Context

## Files
- `tokens.css` — All CSS custom properties. Imported once in `main.jsx` on `:root`. Never define tokens anywhere else.
- `global.css` — Box-sizing reset, body defaults (`margin: 0`, `font-family`, `background`), custom scrollbar styles, `*` resets. Imported once in `main.jsx`.

## Dark mode palette (Linear/Raycast aesthetic)
These are the target values for the tokens. Adjust for feel but stay in this range:

| Token | Target value |
|---|---|
| `--color-background-primary` | `#141414` |
| `--color-background-secondary` | `#1c1c1c` |
| `--color-text-primary` | `#f0f0f0` |
| `--color-text-secondary` | `#a0a0a0` |
| `--color-text-tertiary` | `#606060` |
| `--color-border-primary` | `#4a4a4a` |
| `--color-border-secondary` | `#2e2e2e` |
| `--color-border-tertiary` | `#222222` |
| `--border-radius-md` | `6px` |
| `--border-radius-lg` | `12px` |
| `--font-sans` | `'Inter', system-ui, sans-serif` |

## Shimmer animation
Define the keyframe in `global.css` so all components can use it:
```css
@keyframes shimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
```
Skeleton lines use a gradient background on `--color-background-secondary` with the shimmer animation. See `PreviewCard/CONTEXT.md` for the exact CSS pattern.

## Rules
- Never add new tokens without updating the CLAUDE.md token table.
- Avatar and tag accent colors are NOT tokens — they live as constants in `src/data/students.js` and are applied via inline styles.
