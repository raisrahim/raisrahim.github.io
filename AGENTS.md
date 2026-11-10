# Project Guidelines

## Project context

This repository is Muhammad Rais Rahim's personal portfolio and writing site, published at `raisrahim.com` with Jekyll and GitHub Pages. It uses Jekyll 3.10, Ruby 3.4, and the `no-style-please` remote theme. Keep the site's professional focus on software architecture, engineering leadership, and open-source work.

## Where to make changes

- Root Markdown files (`index.md`, `projects.md`, `archive.md`) are site pages; the homepage also serves as the About page, and articles live in `_posts/`.
- `_data/menu.yml` defines the navigation. `_config.yml` controls site metadata, theme settings, plugins, and permalink behavior.
- `_layouts/` and `_includes/` contain local theme overrides. Check them before changing presentation; the rest of the theme comes from the remote theme.
- `assets/css/main.scss` imports the theme stylesheet. Put authored styles in the existing Sass/CSS structure and scripts in `assets/js/`.
- Edit source files only. `_site/` is generated build output and must not be edited or committed.

## Content and implementation conventions

- Preserve existing Jekyll front matter and layouts. Keep page titles, descriptions, URLs, and navigation consistent when changing a page.
- Keep writing clear, professional, and evidence-based. Do not invent personal history, project capabilities, outcomes, or metrics; use the existing site content or ask for confirmation when facts are missing.
- Keep the minimal, content-first theme. Prefer Markdown and existing layouts over custom HTML, CSS, or JavaScript; add custom code only when the existing structure cannot meet the need.
- Preserve the root-domain setup (`baseurl: ""`) and configured permalink conventions. Use Jekyll-aware paths where appropriate so links and assets work in GitHub Pages builds.

## Build and verification

- Install dependencies with `bundle install` if needed.
- Build the production site with `bundle exec jekyll build`.
- Preview locally with `bundle exec jekyll serve`.
- GitHub Actions deploys the `main` branch; its build uses `JEKYLL_ENV=production` and the Pages base path. There is no separate test suite configured, so run a Jekyll build after source, layout, configuration, style, or script changes.
