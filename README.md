# Personal Website

A modern, sleek portfolio website built with [Quarto](https://quarto.org/). This site showcases professional work, thoughts, and projects through various sections.

## Overview

This website serves as a central hub featuring:

- **Home** - Landing page with key highlights and introduction
- **About** - Background, experience, and professional information
- **Blog** - Articles, insights, and technical writeups
- **Projects** - Showcase of completed projects, case studies, and portfolio work
- **Analytics** - Data visualizations, charts, and interactive analysis dashboards

## Project Structure

```
.
├── _quarto.yml           # Main site configuration
├── index.qmd             # Home page
├── about.qmd             # About page
├── analytics.qmd         # Analytics/charts page
├── blog/
│   ├── index.qmd         # Blog index/listing
│   └── _metadata.yml     # Blog post defaults
├── projects/
│   ├── index.qmd         # Projects portfolio
│   └── _metadata.yml     # Project defaults
├── styles.css            # Custom styling (dark theme)
├── requirements.txt      # Python dependencies
├── .gitignore            # Git ignore rules
└── docs/                 # Generated output (not committed)
```

## Development

### Prerequisites

- [Quarto](https://quarto.org/docs/get-started/) (version 1.9+)
- Python 3.8+ (optional, for data processing/analytics)

### Setup

1. Clone or open this repository
2. Ensure Quarto is installed and available in your PATH
3. (Optional) Set up Python environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

### Running Locally

Preview the site locally:
```bash
quarto preview
```

The site will be available at `http://localhost:3456` and auto-refreshes on file changes.

### Building

Generate static HTML output:
```bash
quarto render
```

Output is generated to the `docs/` directory, ready for deployment.

## Styling

The site uses a **dark theme** with:
- Dark background (#0a0e27)
- Elegant accent colors (cyan, electric blue)
- Modern typography
- High contrast for readability
- Smooth transitions and hover effects

Customize colors and fonts in `styles.css`.

## Deployment

The `docs/` folder contains the built website and is ready for deployment to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Adding Content

### New Blog Post

1. Create a new `.qmd` file in `blog/` folder
2. Add YAML front matter with title, date, categories
3. Write content in Markdown + embedded Python/R if needed
4. It will automatically appear in the blog index

### New Project

1. Create a new `.qmd` file in `projects/` folder
2. Add project metadata (title, tags, description, link)
3. Include images, descriptions, and links
4. Automatically indexed in the projects gallery

### New Page

1. Create a `.qmd` file in the root directory
2. Add to navbar in `_quarto.yml` under `website.navbar.left`
3. Customize with YAML front matter

## Resources

- [Quarto Documentation](https://quarto.org/)
- [Markdown Guide](https://quarto.org/docs/authoring/markdown-basics.html)
- [Quarto Website Guide](https://quarto.org/docs/websites/)
- [Python in Quarto](https://quarto.org/docs/computations/python.html)

## License

Personal use. All rights reserved.
