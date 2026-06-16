# Tutor Dashboard — Project Map

## What this is
A React mockup of an AI-powered lesson planning dashboard for language tutors. Visual-first: dark mode, Linear/Raycast aesthetic, animated shimmer skeleton. Deployed on GitHub Pages via Vite.

---

## Tech stack
- **React** (functional components + hooks)
- **Vite** (bundler + dev server)
- **CSS Modules** (co-located per component)
- **CSS custom properties** (design tokens in `src/styles/tokens.css`)
- No external component libraries — all UI is handcrafted

---

## File map

```
tutor-dashboard-mockup/
├── CLAUDE.md                        ← you are here
├── brief.md                         ← original design spec (source of truth for layout/colors)
├── index.html                       ← Vite entry HTML
├── vite.config.js                   ← GitHub Pages base path set here
├── package.json
├── .gitignore
│
├── public/                          ← static assets (favicon, etc.)
│
└── src/
    ├── CONTEXT.md                   ← src-level instructions
    ├── main.jsx                     ← mounts <App /> into #root
    ├── App.jsx                      ← root layout + shared state (activeStudent, outputType)
    │
    ├── styles/
    │   ├── CONTEXT.md               ← token system instructions
    │   ├── tokens.css               ← all CSS custom properties (colors, radii, font)
    │   └── global.css               ← resets, body defaults, scrollbar styles
    │
    ├── data/
    │   ├── CONTEXT.md               ← data shape instructions
    │   └── students.js              ← mock student array (4 students, fixed)
    │
    └── components/
        ├── CONTEXT.md               ← component rules + anatomy
        │
        ├── Sidebar/
        │   ├── CONTEXT.md           ← sidebar-specific instructions
        │   ├── Sidebar.jsx          ← sidebar wrapper, student list, active session badge
        │   └── Sidebar.module.css
        │
        ├── StudentItem/
        │   ├── CONTEXT.md           ← student row instructions
        │   ├── StudentItem.jsx      ← avatar, name/level, log icon, active state
        │   └── StudentItem.module.css
        │
        ├── PreviewPanel/
        │   ├── CONTEXT.md           ← preview panel instructions
        │   ├── PreviewPanel.jsx     ← topbar (label + 3 action btns) + PreviewCard
        │   └── PreviewPanel.module.css
        │
        ├── PreviewCard/
        │   ├── CONTEXT.md           ← card + skeleton instructions
        │   ├── PreviewCard.jsx      ← card with sections, skeleton lines, tag pills
        │   └── PreviewCard.module.css
        │
        └── ChatSection/
            ├── CONTEXT.md           ← chat strip instructions
            ├── ChatSection.jsx      ← output type select, context pill, textarea, send btn
            └── ChatSection.module.css
```

---

## Naming conventions

| Thing | Convention | Example |
|---|---|---|
| Component files | PascalCase | `Sidebar.jsx` |
| CSS Modules | same name as component | `Sidebar.module.css` |
| CSS custom props | `--color-*`, `--border-radius-*`, `--font-*` | `--color-background-primary` |
| CSS classes (in modules) | camelCase | `.studentRow`, `.activeState` |
| Data files | camelCase | `students.js` |
| Exported data | camelCase | `export const students = [...]` |
| Props | camelCase | `isActive`, `onSelect` |
| Event handlers | `handle*` prefix in component, `on*` as prop name | `handleSelect` / `onSelect` |

---

## State architecture

`App.jsx` owns all shared state and passes it down:
- `activeStudentId` — which student row is highlighted
- `outputType` — selected value from the chat dropdown

No external state library. No API calls. Props down, callbacks up.

---

## CSS token reference (quick lookup)

Defined in `src/styles/tokens.css`. Use these everywhere — never hardcode hex in component CSS except for avatar/tag accent colors.

| Token | Role |
|---|---|
| `--color-background-primary` | Main panel, cards |
| `--color-background-secondary` | Sidebar, inputs, skeleton lines |
| `--color-text-primary` | Names, titles, send button icon |
| `--color-text-secondary` | Action buttons, secondary text |
| `--color-text-tertiary` | Labels (11px uppercase), level lines |
| `--color-border-primary` | Download btn, focused input |
| `--color-border-secondary` | Add-btn dashed, action btns, input default |
| `--color-border-tertiary` | Outer app border, dividers, card borders |
| `--border-radius-md` | Buttons, inputs |
| `--border-radius-lg` | App wrapper, preview card |
| `--font-sans` | All text |

**Avatar accent colors** (hardcode in `students.js`, applied via inline style):
- Purple: `bg #EEEDFE / text #3C3489`
- Teal: `bg #E1F5EE / text #085041`
- Coral: `bg #FAECE7 / text #712B13`
- Blue: `bg #E6F1FB / text #0C447C`

---

## GitHub Pages deployment

Vite config sets `base: '/tutor-dashboard-mockup/'`. Build with `npm run build`, deploy `dist/` to `gh-pages` branch.
