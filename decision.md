# Decision: Adopt new site color palette

- **Date:** 2026-09-28
- **Status:** Accepted

## Context

The site currently uses a dark/purple theme defined in `src/styles/tailwind.css` (`--color-dark-*`, `--color-purple-*`, `--color-pink-*`). Going forward, the site is moving to a new, simpler light palette.

## Decision

Adopt the following palette for all future UI work:

| Role         | Name               | Hex       |
| ------------ | ------------------ | --------- |
| Background   | Ethereal Ivory     | `#E4E4DE` |
| Surface      | Sophisticated Sage | `#C4C5BA` |
| Primary Text | Eerie Black        | `#1B1B1B` |
| Accent       | Muted Moss         | `#595F39` |

Full usage guidance lives in `spec.md`.

## Consequences

- New components/pages should use this palette exclusively.
- Existing components using the legacy dark/purple theme will be migrated incrementally; they are not required to change all at once as part of this decision.
- Any future change to the palette should update `spec.md` and be recorded here.
