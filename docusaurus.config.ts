import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "GraphQL Foundation Handbooks",
  tagline:
    "Documentation and guides for GraphQL Foundation processes and programs",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://handbooks.graphql.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "graphql", // Usually your GitHub org/user name.
  projectName: "handbooks", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "locals",
        path: "locals",
        routeBasePath: "locals",
        sidebarPath: "./sidebars.locals.ts",
        editUrl: "https://github.com/graphql/handbooks/edit/main/",
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "ambassadors",
        path: "ambassadors",
        routeBasePath: "ambassadors",
        sidebarPath: "./sidebars.ambassadors.ts",
        editUrl: "https://github.com/graphql/handbooks/edit/main/",
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "social-media",
        path: "social-media",
        routeBasePath: "social-media",
        sidebarPath: "./sidebars.social-media.ts",
        editUrl: "https://github.com/graphql/handbooks/edit/main/",
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "wg",
        path: "wg",
        routeBasePath: "wg",
        sidebarPath: "./sidebars.wg.ts",
        editUrl: "https://github.com/graphql/handbooks/edit/main/",
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "tsc",
        path: "tsc",
        routeBasePath: "tsc",
        sidebarPath: "./sidebars.tsc.ts",
        editUrl: "https://github.com/graphql/handbooks/edit/main/",
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "grants",
        path: "grants",
        routeBasePath: "grants",
        sidebarPath: "./sidebars.grants.ts",
        editUrl: "https://github.com/graphql/handbooks/edit/main/",
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "GraphQL Handbooks",
      logo: {
        alt: "GraphQL Foundation Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "overview",
          docsPluginId: "locals",
          label: "Locals",
          position: "left",
        },
        {
          type: "doc",
          docId: "overview",
          docsPluginId: "ambassadors",
          label: "Ambassadors",
          position: "left",
        },
        {
          type: "doc",
          docId: "overview",
          docsPluginId: "social-media",
          label: "Social Media",
          position: "left",
        },
        {
          type: "doc",
          docId: "overview",
          docsPluginId: "wg",
          label: "Working Groups",
          position: "left",
        },
        {
          type: "doc",
          docId: "overview",
          docsPluginId: "tsc",
          label: "TSC",
          position: "left",
        },
        {
          type: "doc",
          docId: "overview",
          docsPluginId: "grants",
          label: "Grants",
          position: "left",
        },
        {
          href: "https://graphql.org/codeofconduct/",
          label: "Code of Conduct",
          position: "right",
        },
        {
          href: "https://graphql.org/brand/",
          label: "Brand Guidelines",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Start Here",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Project Meetings",
              href: "https://graphql.org/community/contribute/project-meetings/",
            },
            {
              label: "Discord",
              href: "https://discord.gg/graphql",
            },
            {
              label: "Events",
              href: "https://graphql.org/community/events/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/graphql",
            },
            {
              label: "GraphQL Foundation",
              href: "https://graphql.org/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GraphQL Foundation.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
