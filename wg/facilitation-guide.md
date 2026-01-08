---
title: Facilitation Guide
sidebar_position: 3
---

Hosting a GraphQL Working Group is fairly straightforward; we recommend that you
attend a few working groups before hosting your own, and you can always see how
others do it via our
[YouTube recordings](https://youtube.com/@GraphQLFoundation).

Effective facilitation keeps working group meetings inclusive, efficient, and
outcome-driven.

## Before the Meeting

- Agenda templates should be auto-generated ahead of time, if your WG is new
  then check out [wg-template](https://github.com/graphql/wg-template) and
  [wgutils](https://github.com/graphql/wgutils). A TSC member (currently Benjie)
  takes care of generating the agendas.
- Check over the agenda and ensure it is formatted correctly, and the item
  durations seem reasonable. Often people vastly underestimate discussion time.
- Consider reordering the agenda so shorter items come first, allowing space for
  more champion.
- If the same champion has many topics, consider interspercing other agenda
  items to break up the agenda.
- If appropriate, review notes from previous meeting to ensure you have context.

## During the Meeting

The agenda guides you through the process of starting a meeting, but as a rough
summary:

1. Wait for all people listed in the attendees to show up, or until 5 minutes
   past the start time, whichever occurs first.
1. Start by welcoming and introducing the working group, to ensure people are
   "in the right room" ;)
1. Note that all participants must have agreed to the specification membership
   agreement, participation guidelines, contribution guide and code of conduct,
   and that meetings are recorded automatically, published to YouTube, and that
   we use LLMs/AIs to generate summaries.
1. Invite attendees to give a very brief introduction (typically name and
   company); this is intended to ensure attendees know the preferred
   pronunciation of each others' names.
1. If anyone is in attendance who is not on the agenda, nudge them to add their
   attendance. The CLAbot ensures that all attendees on the agenda have agreed
   to the CLA, unlisted attendees who have not agreed to the CLA must not
   participate until such time as they have signed the CLA.
1. If someone appears late, invite them to introduce themself when the
   opportunity arises, without breaking the flow of the meeting.
1. Remind attendees that there is a "live notes" document that all can
   contribute to, and ask for volunteers to keep it updated. Though the AI
   summary tools make a summary of the meeting, often human attendees have more
   context and their notes can be much higher value.
1. Review the agenda for the attendees, and give them a chance to add any other
   items.
1. Invite the first topic's champion to introduce their topic.

There are many different speaking cultures around the world, some are more
forward and happy to interject, whilst others are more reserved and prefer to
wait their turn. Keep an eye on the "raise hand" functionality in Zoom, and if
someone raised their hand but didn't get a chance to speak, feel free to
interrupt and invite them to do so. Do not put people on the spot asking for
input when they haven't offered, but if someone has something to say (you might
notice them writing in the text chat, for example), invite them to do so (e.g.
ask them to expand upon or echo their chat comment).

Should you have a packed agenda and an item is running significantly over time,
especially if the conversation is becoming cyclic or progress is slowing, you
should interrupt and invite the return of the topic at the next meeting, moving
onto the next item. You can return to that topic at the end of the meeting if
there is time.

Where possible, explicitly call out action items, and **note them in the live
notes**. Do not trust the AI to capture these accurately!

## After the Meeting

- Zoom recordings will be sync'd to YouTube roughly once a week (typically
  Thursdays).
- Meeting notes should be added to the repository following the pattern already
  in use (see instructions in the repo). If the facilitator doesn't take care of
  this, typically the community gardener will do so after a week or two.
- Update GitHub issues with decisions made or next steps assigned.

## Agendas

Agenda's are generated via the `wgutils agenda gen` command; most repos let you
call it as `yarn gen-agenda YYYY MM` (replacing YYYY and MM with the year and
month to generate agendas for). Running this command will overwrite existing
agendas for the same date, so be careful not to lose attendance or agenda items!

Each item must have a duration and a champion. The champion introduces the
subject and typically invites discussion around it.

## Feeding back to the main WG

If you're facillitating a subcommittee, when major advancements happen you
should add notification to [the main WG](https://github.com/graphql/graphql-wg)
to keep members informed and invite further input to the subcommittee. This is
also useful for cross-polination of ideas between subcommittees.
