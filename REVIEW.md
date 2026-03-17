## Critical fixes (must do)

- `app/page.jsx`: Remove placeholder-grade content from the live page. The contact section currently shows `LinkedIn - placeholder`, and the hero still includes an inline note about replacing the headshot later. Both make the site feel unfinished immediately.
- `app/layout.jsx`: Expand metadata beyond title/description. The app is missing stronger SEO defaults such as canonical alternates, robots, icons metadata, keyword/category context, and richer social sharing coverage.
- `app/projects/[slug]/page.jsx`: Add a custom not-found experience. Dynamic case-study routes currently fall back to the framework default, which is a poor dead-end for a portfolio.
- `app/components/ui/Navbar.jsx`: Add explicit navigation labelling and a skip link target so keyboard and assistive-tech users can move through the page cleanly.
- `app/globals.css`: Add visible focus states and reduced-motion handling. The current UI relies heavily on hover and animation, but keyboard focus treatment and motion preferences are not respected.
- `app/globals.css`: Improve responsive grid behaviour. The project and supporting grids collapse too aggressively into single-column layouts on tablet widths, which wastes space and makes the bento system feel less intentional.

## Recommended improvements (should do)

- `app/page.jsx`: Tighten copy that reads as generic or over-polished, especially the quote section and some hero/supporting text.
- `app/page.jsx`: Replace generic `div` groupings with more semantic list markup where content is clearly list-shaped, such as services and the AI employee flow.
- `app/projects/[slug]/page.jsx`: Upgrade page metadata per case study with canonical URLs and social metadata rather than only a title and description.
- `app/layout.jsx`: Add a generated Open Graph image and sitemap so the site shares cleanly and exposes a crawlable route map.
- `app/globals.css`: Improve mobile touch targets and long-link wrapping in the contact/nav areas.
- `app/page.jsx`: Add structured data for the portfolio homepage to strengthen SEO and entity clarity.

## Nice-to-haves (could do)

- Add a real headshot and project imagery instead of the current abstract mockups.
- Add subtle scroll-linked or staggered reveal logic rather than animating every card immediately on load.
- Add a small loading state for dynamic project routes, even if the pages are statically generated most of the time.
- Add a dedicated contact CTA beyond email and GitHub, such as LinkedIn or a booking link, once the final destination is known.
