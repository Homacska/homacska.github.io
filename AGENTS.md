# Agent Instructions

## Project goal

Build a professional personal website for Adam Jele focused on behavioural science, research, data, decision-making, and AI-adjacent work.

## Current design direction

The landing page should feel dark, elegant, powerful, scientific, and slightly futuristic. It opens with a full-screen hero centred around the name "Adam Jele" inside bracket-like framing.

Desired feel:

- dark background
- off-white / sand typography
- old and new at the same time
- elegant, not loud
- technical but not generic
- subtle glitch/interference
- scattered signal text near the top-right and bottom-left of the name frame
- scientific/research/product-lab mood

Avoid:

- white default browser styling
- generic corporate website look
- excessive neon
- heavy JavaScript
- frameworks unless explicitly requested
- over-engineering
- top navigation cluttering the hero

## Technical rules

- Use plain HTML, CSS, and minimal vanilla JavaScript.
- Keep GitHub Pages compatibility.
- Keep `index.html`, `styles.css`, and `script.js` in the repository root unless deliberately restructuring.
- Link CSS as `./styles.css`.
- Link JS as `./script.js`.
- If the page appears black text on white background, CSS is not loading. Check file location, filename, case sensitivity, and deployment cache.
- Preserve accessibility: readable contrast, semantic sections, responsive layout, reduced-motion support.
- Do not add npm, React, Tailwind, build tools, or dependencies unless requested.

## Content positioning

Position Adam as a researcher/analyst working across:

- behavioural science
- quantitative research
- neuroscience/psychology
- decision science
- data analysis
- Python workflows
- AI-adjacent research/productivity workflows

Keep copy concise, concrete, and professional.

## Recent visual decisions

- Removed top navigation/header from the landing screen.
- Name must stay on one line.
- Brackets should be slightly larger than the name.
- Display font should feel more powerful and high-contrast.
- Rotating text now appears as scattered signal sparks around the top-right and bottom-left of the name frame.
- Glitch/noise strings should appear only occasionally, roughly every fourth signal.

## Immediate next priorities

1. Confirm layout on desktop and mobile.
2. Refine hero visual polish.
3. Add real project/case-study cards.
4. Add CV download and LinkedIn/GitHub links.
5. Later add separate pages for work, writing, and experiments.
