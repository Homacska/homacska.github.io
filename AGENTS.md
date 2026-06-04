# Agent Context & Guidelines

This document provides LLM agents with comprehensive context about this Quarto website project for understanding, maintaining, and extending it.

## Project Overview

**Type**: Personal portfolio website  
**Framework**: Quarto (static site generator)  
**Language**: Markdown + YAML + CSS (+ Python for analytics/data)  
**Theme**: Modern dark theme with cyan/blue accents  
**Deployment**: Static HTML (docs/ folder)

## Key Technical Details

### Site Configuration (_quarto.yml)

- **Project Type**: `website` (Quarto website format)
- **Output Directory**: `docs/` (for deployment)
- **Theme**: `darkly` (dark theme base) with custom CSS override
- **Navigation**: Navbar-based with main sections: Home, About, Blog, Projects, Analytics

### Page Structure

```
index.qmd              → /index.html (Home)
about.qmd              → /about.html (About)
analytics.qmd          → /analytics.html (Analytics/Charts)
blog/index.qmd         → /blog/ (Blog listing)
blog/*.qmd             → /blog/post-name/ (Individual posts)
projects/index.qmd     → /projects/ (Projects gallery)
projects/*.qmd         → /projects/project-name/ (Individual projects)
```

### Styling Architecture

- **Base Theme**: Quarto's `darkly` theme (Bootstrap-based dark mode)
- **Custom CSS**: `styles.css` - overrides and extensions
- **Design System**:
  - Primary dark: `#0a0e27`
  - Accent 1 (Cyan): `#00d9ff`
  - Accent 2 (Blue): `#0066ff`
  - Text primary: `#e0e0e0`
  - Borders/subtle: `#1a1f3a`

### Metadata Management

- `blog/_metadata.yml` - Defaults for blog posts (date, author, categories)
- `projects/_metadata.yml` - Defaults for project entries (tags, links)

## Common Tasks & Patterns

### Adding a Blog Post

File: `blog/YYYY-MM-DD-slug-title.qmd`

```yaml
---
title: "Post Title"
date: 2026-06-04
author: "Author Name"
categories: [category1, category2]
description: "Brief summary"
---

Content in Markdown...
```

Posts auto-list in `/blog/` with proper sorting/formatting.

### Adding a Project

File: `projects/project-name.qmd`

```yaml
---
title: "Project Title"
date: 2026-06-04
tags: [tag1, tag2]
description: "What this project is about"
link: "https://github.com/..."
image: "path/to/image.png"
---

Project description and details...
```

### Embedding Python/R Code

In any `.qmd` file:

````markdown
```{python}
import pandas as pd
import matplotlib.pyplot as plt

# Code here - output rendered directly
```
````

Requires Python packages in `requirements.txt`.

### Customizing Styling

Edit `styles.css` for:
- Color overrides
- Typography adjustments
- Component styling (buttons, cards, etc.)
- Responsive breakpoints
- Animations/transitions

## Development Workflow

1. **Local Development**: `quarto preview` (auto-reload at `http://localhost:3456`)
2. **Create/Edit Content**: Add `.qmd` files or edit existing ones
3. **Build for Deployment**: `quarto render` → generates `docs/`
4. **Version Control**: Commit source files (`.qmd`, `.yml`, `.css`); ignore `docs/` if auto-generated

## File Responsibilities

| File/Folder | Purpose | When to Edit |
|---|---|---|
| `_quarto.yml` | Site config, navbar, format settings | Adding pages, changing theme, updating navbar |
| `styles.css` | Custom styling and overrides | Design changes, color adjustments, responsive tweaks |
| `index.qmd` | Home page content | Updating hero/welcome section |
| `about.qmd` | About/bio page | Updating professional info |
| `analytics.qmd` | Data viz/charts | Adding charts, updating dashboards |
| `blog/` | Blog posts | Adding new articles |
| `projects/` | Project portfolio | Adding/showcasing projects |
| `requirements.txt` | Python deps | Adding libraries for analytics/processing |

## Content Guidelines

- **Markdown Syntax**: Use standard Markdown + Quarto extensions
- **Code Blocks**: Use triple backticks with language specifier (````python`, ````html`, etc.)
- **Images**: Place in `assets/` or reference from external URLs; use relative paths
- **Links**: Use Markdown link syntax; Quarto auto-resolves internal references
- **Math**: Use `$...$` for inline, `$$...$$` for display LaTeX
- **YAML Front Matter**: Required for all `.qmd` files; defines metadata

## Deployment

- **Output Location**: `docs/` folder (all static HTML)
- **Ready for**: GitHub Pages, Netlify, Vercel, any static host
- **Branch/Path**: Configure hosting to serve from `docs/` folder or root after build

## Customization Hooks

- **Fonts**: Update `styles.css` font-family declarations
- **Colors**: Modify CSS custom properties or inline colors in `_quarto.yml`
- **Layout**: Quarto layouts via YAML; CSS Grid/Flexbox for custom sections
- **Analytics**: Add tracking script in `_quarto.yml` or `styles.css` if needed

## Known Patterns & Conventions

- Files in `blog/` and `projects/` auto-index; no manual listing needed
- Dates in YYYY-MM-DD format (ISO 8601) for consistency
- Slugs in filenames use lowercase + hyphens (kebab-case)
- YAML front matter is mandatory; invalid YAML breaks rendering
- Python/R code requires `execute: true` in front matter or global settings
- CSS specificity: Custom CSS in `styles.css` overrides Quarto theme defaults

## Error Handling

- **Rendering Fails**: Check YAML syntax (quotes, indentation), file paths
- **Styling Not Applied**: Clear browser cache, check CSS specificity, verify file paths
- **Python Code Errors**: Verify `requirements.txt` packages installed, check code for runtime errors
- **Links Broken**: Use relative paths for internal links (Quarto auto-resolves)

## Performance Notes

- Quarto caches rendered output; use `quarto render --no-cache` if needed
- Large images should be optimized before committing
- Python code execution during build can slow rendering; optimize heavy computations

---

**Last Updated**: 2026-06-04  
**Quarto Version**: 1.9+  
**Python Version**: 3.8+
