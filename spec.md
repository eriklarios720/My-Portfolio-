# Color Palette Spec

Going forward, all UI work on this site must use this palette instead of the legacy dark/purple theme in `src/styles/tailwind.css`.

## Palette

| Role         | Name               | Hex       |
| ------------ | ------------------ | --------- |
| Background   | Ethereal Ivory     | `#E4E4DE` |
| Surface      | Sophisticated Sage | `#C4C5BA` |
| Primary Text | Eerie Black        | `#1B1B1B` |
| Accent       | Muted Moss         | `#595F39` |

## Usage guidance

- **Background** (`#E4E4DE`): page/body background.
- **Surface** (`#C4C5BA`): cards, panels, section backgrounds, dividers — anything raised above the base background.
- **Primary Text** (`#1B1B1B`): default body/heading text color on both background and surface.
- **Accent** (`#595F39`): buttons, links, highlights, active/focus states, icons that need emphasis.

## Implementation notes

- Define these as Tailwind v4 theme tokens in `src/styles/tailwind.css` under `@theme`, e.g.:
  - `--color-background: #E4E4DE;`
  - `--color-surface: #C4C5BA;`
  - `--color-ink: #1B1B1B;`
  - `--color-accent: #595F39;`
- Prefer the token names (`bg-background`, `bg-surface`, `text-ink`, `text-accent` / `bg-accent`) over hardcoded hex values in components.
- New components and pages should use only this palette. Do not introduce new colors without updating this spec and `decision.md`.
