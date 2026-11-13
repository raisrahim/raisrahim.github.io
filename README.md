# Muhammad Rais Rahim — Personal Website

[raisrahim.com](https://raisrahim.com) is the personal website, professional portfolio, and writing archive of Muhammad Rais Rahim, a software architect and engineering leader. It features writing about software architecture and engineering, selected open-source projects, and professional background.

The site is built with [Jekyll](https://jekyllrb.com/) and the [no-style-please](https://github.com/riggraz/no-style-please) remote theme, with local layout and style customizations.

## Local development

Requirements: Ruby 3.4 or later and Bundler.

```sh
bundle install
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000). To build the site without starting the development server:

```sh
bundle exec jekyll build
```

The generated site is written to `_site/`; make changes to the source files, not generated output.

## Project structure

- `index.md` — homepage and About page
- `projects.md` — selected projects
- `writing.md` — writing archive at `/writing/`
- `_posts/` — articles; use Jekyll post filenames such as `YYYY-MM-DD-title.md`
- `_data/menu.yml` — site navigation
- `_config.yml` — site metadata, theme settings, plugins, and permalink configuration
- `_layouts/`, `_includes/` — local overrides for the remote theme
- `assets/` and `_sass/` — site-specific styles and scripts

Posts and pages use Jekyll front matter for layouts, titles, dates, and descriptions. The site uses the Jekyll Feed, Sitemap, and Jektex plugins. SEO metadata is rendered in the local head include.

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages when changes are pushed to `main`. Deployment can also be started manually from the repository's Actions tab. The production build runs with `JEKYLL_ENV=production`.

## License

See [LICENSE.txt](LICENSE.txt).
