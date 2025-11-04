# GraphQL Foundation Handbooks

This repository contains the goal-oriented handbooks for GraphQL Foundation
programs, built with [Docusaurus](https://docusaurus.io/).

## Structure

- `docs/locals-program` — Launching and scaling local GraphQL chapters.
- `docs/ambassadors-program` — Expectations, enablement, and standards for
  ambassadors.
- `docs/social-media` — Campaign workflows and brand guidelines for the social
  team.
- `docs/working-groups` — Meeting participation and facilitation guides.
- `docs/tsc` — Technical Steering Committee processes.
- `docs/grants-program` — Community grant preparation and reporting.

Each page starts with an admonition that helps readers skip content that does
not match their current goals.

## Getting Started

Install dependencies with npm (Node.js 20+):

```bash
npm install
```

### Local Development

```bash
npm start
```

This command runs the development server. The site will reload as you edit
files.

### Build for Production

```bash
npm run build
```

The static assets are output to the `build` directory and can be served by any
static hosting platform.

## Configuration

- Update site metadata in `docusaurus.config.ts` (`url`, navigation, footer).
- Manage sidebar structure in `sidebars.ts`.
- Customize styling in `src/css/custom.css`.

## Formatting

This project uses [Prettier](https://prettier.io/) to keep Markdown, MDX, and
source files wrapped to a consistent line length.

- Format files automatically:

  ```bash
  npm run format
  ```

- Check formatting without applying changes:

  ```bash
  npm run format:check
  ```

### Editor integration

If you use VS Code, install the “Prettier – Code formatter” extension and add
the following to `.vscode/settings.json` to format on save:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[mdx]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Contributing

1. Create a branch.
2. Make your updates.
3. Run `npm run build` to verify the site compiles.
4. Open a pull request describing the change and the program it impacts.
