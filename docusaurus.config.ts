import { themes as prismThemes } from "prism-react-renderer";
import type { Config, PluginConfig } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creates a plugin config for this folder in the repo
 */
function docs(path: string): PluginConfig {
  return [
    "@docusaurus/plugin-content-docs",
    {
      id: path,
      path: path,
      routeBasePath: path,
      sidebarPath: `./sidebars.${path}.ts`,
      editUrl: "https://github.com/graphql/handbooks/edit/main/",
      showLastUpdateAuthor: false,
      showLastUpdateTime: true,
    },
  ];
}

const config: Config = {
  title: "GraphQL Foundation Handbooks",
  tagline:
    "Community-maintained documentation and guides for GraphQL Foundation processes and programs",
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
  deploymentBranch: "gh-pages",
  trailingSlash: false,

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
    docs("locals"),
    docs("ambassadors"),
    docs("social-media"),
    docs("wg"),
    docs("tsc"),
    docs("grants"),
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
          docId: "index",
          docsPluginId: "locals",
          label: "Locals",
          position: "left",
        },
        {
          type: "doc",
          docId: "index",
          docsPluginId: "ambassadors",
          label: "Ambassadors",
          position: "left",
        },
        {
          type: "doc",
          docId: "index",
          docsPluginId: "social-media",
          label: "Social Media",
          position: "left",
        },
        {
          type: "doc",
          docId: "index",
          docsPluginId: "wg",
          label: "Working Groups",
          position: "left",
        },
        {
          type: "doc",
          docId: "index",
          docsPluginId: "tsc",
          label: "TSC",
          position: "left",
        },
        {
          type: "doc",
          docId: "index",
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
