import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  locals: [
    "locals-program/overview",
    "locals-program/requirements",
    "locals-program/things-to-consider",
    "locals-program/resources",
    "locals-program/sponsorship",
    "locals-program/social-media",
  ],
  ambassadors: [
    "ambassadors-program/index",
    "ambassadors-program/program-overview",
    "ambassadors-program/standards",
    "ambassadors-program/organizer-overview",
  ],
  "social-media": [
    "social-media/overview",
    "social-media/campaign-playbook",
    "social-media/voice-and-visuals",
  ],
  "working-groups": [
    "working-groups/overview",
    "working-groups/join-a-meeting",
    "working-groups/facilitation-guide",
    "working-groups/async-contributions",
  ],
  tsc: [
    "tsc/overview",
    "tsc/meeting-prep",
    "tsc/observer-etiquette",
    "tsc/spec-proposals",
  ],
  grants: [
    "grants-program/overview",
    "grants-program/prepare-a-proposal",
    "grants-program/reporting-and-renewal",
  ],
};

export default sidebars;
