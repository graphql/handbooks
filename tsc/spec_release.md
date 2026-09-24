---
title: Releasing specifications
---

GraphQL specs are authored in `spec-md` and we use `wgutils` to manage the
releasing of specifications.

If your specification is new, please follow the setup, otherwise you can skip to
versioning.

## Setup

### Dependencies

We recommend that you protect your repository with a `.npmrc` file such as:

```ini
ignore-scripts=true
min-release-age=7
min-release-age-exclude[]=wgutils
```

Then install the dependencies:

```sh
npm install --save-dev wgutils spec-md prettier cspell nodemon
```

### package.json scripts

These commands are common to all of our specifications, and are idempotent (feel
free to run them against an existing spec repo to get up to date scripts):

```sh
# Specification build
npm pkg set 'scripts.build=wgutils spec build'
npm pkg set 'scripts.test:build=wgutils spec build --test'
npm pkg set 'scripts.watch=nodemon -e json,md --exec "npm run build"'

# Spell check
npm pkg set 'scripts.test:spelling=cspell "spec/**/*.md" README.md LICENSE.md'

# Formatting
npm pkg set 'prettier.proseWrap=always'
npm pkg set 'prettier.trailingComma=none'
npm pkg set 'scripts.format=prettier --write "**/*.{md,yml,yaml,json}"'
npm pkg set 'scripts.test:format=prettier --check "**/*.{md,yml,yaml,json}" || npm run suggest:format'
npm pkg set 'scripts.suggest:format=echo "'$'\n''To resolve this, run: $(tput bold)npm run format$(tput sgr0)" && exit 1'

# Test
npm pkg set 'scripts.test=npm run test:spelling && npm run test:format && npm run test:build'

# Versioning
npm pkg set 'scripts.version:prepare=wgutils spec version'
npm pkg set 'scripts.version:release=wgutils spec release'
```

### Spell check

We use cspell for spelling; grab the latest `cspell.yml` from the GraphQL spec
to use as a basis: https://github.com/graphql/graphql-spec/blob/main/cspell.yml

### Repo configuration

Create a `wg.config.js` file in the root of the repository, and fill it out to
match your spec needs; for example here's the GraphQL Spec's config:

```js
// @ts-check

/** @type {import('wgutils').Config} */
const config = {
  name: "GraphQL Specification",
  repoUrl: "https://github.com/graphql/graphql-spec",
  meetings: false,
  spec: {
    title: "GraphQL", // Must **NOT** contain the word "Specification"
    mainFile: "spec/GraphQL.md",
    url: "https://spec.graphql.org",
  },
};

module.exports = config;
```

### spec/metadata.json

This file needs to exist, even if it's empty:

```json
{
  "biblio": {}
}
```

## Release process

A release is tagged as `MonthYYYY` where `Month` is the full month name in
English and YYYY the full year. Replace all occurrences of `MonthYYYY` below
with your release's correct tag.

The spec release process is as follows:

1. Prepare release PR.
1. TSC votes to approve.
1. Merge and publish the release.
1. Publish news of the release.
1. 45 days later: spec release is official!

### Prepare a release PR

1. Make sure you're running the latest version of `wgutils` and have the latest
   scripts (see "Setup" above)
1. Create a new branch in the repository:
   `git checkout main && git pull --rebase && git checkout -b prepare-MonthYYYY`
1. Create a GitHub personal access token (classic) with `public_repo, read:org`
   permissions
1. Run the prepare script with your GitHub token:
   `GITHUB_TOKEN="..." npm run version:prepare MonthYYYY`
1. Fill out the placeholders in the generated changelog
1. Carefully check over the changelog - in particular, the authors are
   inferred/guessed from GitHub data, but this can be inaccurate - carefully
   check the usernames you don't recognize as contributors; maybe we meant a
   different user!
1. Open a pull request for TSC voting.

### TSC approval

1. Send the release PR to the TSC on **at least** the `tsc-private` mailing list
   and the
   [the GitHub TSC discussions board](https://github.com/graphql/tsc/discussions).
   These two are a requirement. In addition, use any other channels you have
   available to you.
1. Each TSC member should carefully review the release, and if satisfied must
   add a GitHub review approval. Any concerns should be noted, and can be
   addressed before release.
1. Once the requirements of a TSC vote are met, the status of the release can be
   determined.

### Publish the release

Obviously only continue if the TSC approved!

1. Merge the release pull request to `main`
1. Run `npm run version:release MonthYYYY` (replacing your tag version)
1. Run `git push --follow-tags`

The spec should build and publish automatically via GitHub actions.
Congratulations; the release is out!
