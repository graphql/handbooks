# GraphQL Foundation Handbooks

This repository contains community-maintained documentation and guides for
various GraphQL Foundation processes and programs. Contributions are very
welcome, and should follow the [Contributing
Handbook](https://handbooks.graphql.org/contributing)!

## Structure

- `docs/contributing` — Contributing to GraphQL Foundation projects via GitHub.
- `docs/wg` — Meeting participation and facilitation guides.
- `docs/ambassadors-program` — Expectations, enablement, and standards for
  GraphQL Ambassadors.
- `docs/social-media` — Campaign workflows and brand guidelines for the social
  team.
- `docs/locals` — Launching and scaling local GraphQL communities.
- `docs/grants-program` — Community grant preparation and reporting.
- `docs/tsc` — Technical Steering Committee processes.

Each page should start with an outline of the target audience for the article,
enabling readers to skip articles that do not match their current goals.

## Getting Started

1. Ensure you have Node.js 22+ installed (e.g. with `nvm install 22`)
2. Ensure you have `yarn` installed (e.g. with `npm install -g yarn`)
3. Check out the repository (e.g. with `git checkout https://github.com/graphql/handbooks`)
4. Change into that repository (e.g. `cd handbooks`)
5. Install the dependencies with `yarn`

```bash
yarn
```

### Local Development

```bash
yarn start
```

This command runs the development server. The site will reload as you edit
files.

### Build for Production

```bash
yarn build
```

The static assets are output to the `build` directory and can be served by any
static hosting platform. Test it locally:

```bash
yarn serve
```

## Configuration

- Update site metadata in `docusaurus.config.ts` (`url`, navigation, footer).
- Manage sidebar structure in `sidebars.ts`.
- Customize styling in `src/css/custom.css`.

## Formatting

This project uses [Prettier](https://prettier.io/) to keep Markdown, MDX, and
source files wrapped to a consistent line length.

- Format files automatically:

  ```bash
  yarn format
  ```

- Check formatting without applying changes:

  ```bash
  yarn format:check
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

1. Fork the repository.
1. Check out your fork.
1. Create a new branch.
1. Make your updates.
1. Run `yarn format` to fix formatting.
1. Run `yarn build` to verify the site compiles.
1. Push your changes and open a pull request, include a description.
