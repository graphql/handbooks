---
title: Social Media
sidebar_position: 5
---

GraphQL has a number of social channels; see
[the Social Media handbook](/social-media) for details.

## Typefully

We encourage you to get involved in posting to our social media! To do so,
please sign up at https://typefully.com/ and then send your username to your
contact at the GraphQL Foundation so you can be added to our account.

When it comes time to promote your next local, you can log in to Typefully and
draft posts to go out on Bluesky, LinkedIn and/or Twitter/X. Once drafted,
please let us know so we can schedule your posts to go out!

## Event Banner Images

The [graphql.github.io](https://github.com/graphql/graphql.github.io) repo
includes a script that generates ready-to-post banner images (1200×630,
matching the GraphQL Conf design system) for your event: an announcement, one
per speaker, and a call for proposals. No design tool required.

### Setup

1. Clone [graphql/graphql.github.io](https://github.com/graphql/graphql.github.io)
   and install dependencies (`pnpm install`).
1. Start the dev server with `pnpm dev` and leave it running — the script
   fetches each banner from a local route.

### Generate your banners

1. Copy
   [`scripts/meetups/EXAMPLE.yaml`](https://github.com/graphql/graphql.github.io/blob/source/scripts/meetups/EXAMPLE.yaml)
   to a new file, e.g. `scripts/meetups/your-local-sept-2026.yaml`, and fill in
   your event's details:
   - `event`: name, slug, date (ISO 8601), location (defaults to "Zoom"),
     registration link, and host.
   - `cfp` _(optional)_: a deadline and submission link, if you're still
     collecting speakers.
   - `speakers` _(optional)_: one entry per speaker (name, title, company,
     photo, talk title) to generate a spotlight banner for each.
1. Run the generator:

   ```
   pnpm generate:social-banner scripts/meetups/your-local-sept-2026.yaml
   ```

1. Find your PNGs in `social-banners/<your-event-slug>/`: an
   `announcement.png`, a `speaker-<name>.png` per speaker, and a `cfp.png` if
   you included a `cfp` block. Post these straight to
   [Typefully](#typefully) or your own channels.

As a bonus, the script also adds your event to the
[community events page](https://graphql.org/community/events/) by inserting an
entry into `events.ts` (it skips this if the slug is already present) — open a
PR with that change if you'd like your event listed there too.

## YouTube

We encourage you to video your Local talks, panels and Q&As. Videos can be
hosted on the [GraphQL TV channel](https://www.youtube.com/@GraphQLTV) in a
playlist for your Local and promoted through the social media channels above. If
you prefer, you can host your videos on a separate channel, so long as it
adheres to the [brand guidelines](https://graphql.org/brand/), and the GraphQL
TV channel can link to it in the "GraphQL Around the World" section.
