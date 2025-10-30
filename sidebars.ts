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
  handbookSidebar: [
    {
      type: "category",
      label: "Locals Program",
      link: { type: "doc", id: "locals-program/overview" },
      items: [
        "locals-program/requirements",
        "locals-program/things-to-consider",
        "locals-program/resources",
        "locals-program/sponsorship",
        "locals-program/social-media",
      ],
    },
    {
      type: "category",
      label: "Ambassadors Program",
      link: { type: "doc", id: "ambassadors-program/overview" },
      items: [
        "ambassadors-program/responsibilities",
        "ambassadors-program/organizer-toolkit",
        "ambassadors-program/standards",
      ],
    },
    {
      type: "category",
      label: "Social Media Team",
      link: { type: "doc", id: "social-media/overview" },
      items: [
        "social-media/campaign-playbook",
        "social-media/voice-and-visuals",
      ],
    },
    {
      type: "category",
      label: "Working Groups",
      link: { type: "doc", id: "working-groups/overview" },
      items: [
        "working-groups/join-a-meeting",
        "working-groups/facilitation-guide",
        "working-groups/async-contributions",
      ],
    },
    {
      type: "category",
      label: "Technical Steering Committee",
      link: { type: "doc", id: "tsc/overview" },
      items: [
        "tsc/meeting-prep",
        "tsc/observer-etiquette",
        "tsc/spec-proposals",
      ],
    },
    {
      type: "category",
      label: "Grants Program",
      link: { type: "doc", id: "grants-program/overview" },
      items: [
        "grants-program/prepare-a-proposal",
        "grants-program/reporting-and-renewal",
      ],
    },
  ],
};

export default sidebars;
