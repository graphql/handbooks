import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
    'locals/overview',
    'locals/requirements',
    'locals/things-to-consider',
    'locals/resources',
    'locals/sponsorship',
    'locals/social-media',
  ],
  ambassadors: [
    'ambassadors/overview',
    'ambassadors/requirements',
    'ambassadors/tasks',
    'ambassadors/standards',
    'ambassadors/application',
    'ambassadors/foundation',
    'ambassadors/financial-support',
    'ambassadors/organizer-overview',
  ],
  'social-media': [
    'social-media/overview',
    'social-media/campaign-playbook',
    'social-media/voice-and-visuals',
  ],
  wg: [
    'wg/overview',
    'wg/join-a-meeting',
    'wg/facilitation-guide',
    'wg/async-contributions',
  ],
  tsc: [
    'tsc/overview',
    'tsc/meeting-prep',
    'tsc/observer-etiquette',
    'tsc/spec-proposals',
  ],
  grants: [
    'grants-program/overview',
    'grants-program/prepare-a-proposal',
    'grants-program/reporting-and-renewal',
  ],
};

export default sidebars;
