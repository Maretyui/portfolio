# portfolio

My personal developer portfolio — source for a previous version of [maretyui.com](https://maretyui.com).

**Retired.** maretyui.com has since moved on to further rebuilds. This repo is kept around for reference/rollback only and is no longer deployed.

## Stack

- Next.js (static export) + TypeScript
- Tailwind CSS

## Content

`components/navigation.tsx` is the fixed top nav with an EN/DE language toggle; `components/hero.tsx`, `components/skills.tsx`, `components/projects.tsx`, and `components/contact.tsx` are the homepage sections, stacked and scrolled to via the nav's section-jump buttons.

## Accessibility

Icon-only links (social icons, language toggle) carry descriptive `aria-label`s, and the nav's active section is exposed via `aria-current="page"`. Project cards in `components/projects.tsx` reveal their description text on hover on desktop; a `group-focus-visible` counterpart to the `group-hover` classes ensures keyboard-only users see the same content when tabbing to a card, not just mouse users.

## License

MIT — see [LICENSE](LICENSE).
