# TODO - IELTS Plan Frontend Polish

- [x] Update `index.html` styling with “Nautilus Editorial” direction
- [x] Replace background grid overlay with contour rings + film grain
  - [x] Redefine CSS variables (teal/aquamarine + brass accents, deep-ink base) for both light/dark
  - [x] Add distinctive display Arabic font pairing and apply to headings
  - [ ] Strengthen typography hierarchy, spacing tokens, and pill/badge edge treatments
  - [ ] Add staged page reveal animations; respect `prefers-reduced-motion`
- [ ] Improve accessibility and semantics
  - [ ] Add proper ARIA tablist/tab roles + aria-selected + aria-controls
  - [ ] Add keyboard navigation (ArrowLeft/ArrowRight, Home/End) for RTL tabs
  - [x] Add `aria-pressed` for theme toggle
- [ ] Small JS safety cleanup
  - [x] Keep current functionality while syncing ARIA-selected state when activating tabs


- [ ] Manual verification checklist
  - [ ] Theme toggle works and persists
  - [ ] Tab switching works via click + keyboard
  - [ ] Today checklist progress updates and persists
  - [ ] Backend sync indicator behaves when server offline/online

