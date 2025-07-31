import { themes as prismThemes, themes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Kirimin Docs",
  tagline: "Kirimin for Developers",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://devanka761.github.io",
  baseUrl: "/kirimin-docs/",

  organizationName: "devanka761",
  projectName: "kirimin-docs",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        htmlLang: "id",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/devanka761/kirimin-docs/tree/main",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    image: "img/kirimin_icon.png",
    navbar: {
      title: "Kirimin Docs",
      logo: {
        alt: "Kirimin Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Get Started",
        },
        {
          href: "https://kirimin.devanka.id",
          label: "Kirimin",
          position: "right",
        },
        {
          href: "https://github.com/devanka761",
          label: "GitHub",
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
              label: "Get Started",
              to: "/",
            },
          ],
        },
        {
          title: "Related",
          items: [
            {
              label: "Kulon",
              href: "https://kulon.devanka.id",
            },
            {
              label: "Kirimin",
              href: "https://kirimin.devanka.id",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Discord",
              href: "https://devanka.id/discord",
            },
            {
              label: "GitHub",
              href: "https://github.com/devanka761",
            },
            {
              label: "YouTube",
              href: "https://youtube.com/@devanka761",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kirimin Docs - Devanka`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.palenight,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
