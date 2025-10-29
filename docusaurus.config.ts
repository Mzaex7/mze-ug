import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Mark Zeitler Engineering UG',


  // Set the production url of your site here
  url: 'https://markzeitler.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mzaex7', // Usually your GitHub org/user name.
  projectName: 'mze-ug', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: true,
        },
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Mark Zeitler Engineering',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Leistungen',
        },
        {
          position: 'right',
          label: 'Referenzen',
          to: '/Referenzen/Referenzen',
        },
        {
          position: 'right',
          label: 'Impressum',
          to: '/impressum',
        },
        {
          to: '/kontakt',
          label: 'Kontakt',
          position: 'right',
          className: 'navbar__item--kontakt'
        },
      ],

    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; max-width: 1400px; margin: 0 auto; padding: 0 2rem;">
          <div style="color: #999999; font-size: 0.95rem;">
            Copyright © ${new Date().getFullYear()} Made with ❤️ by Max and Lena
          </div>
          <div style="display: flex; gap: 1.5rem; align-items: center;">
            <a href="/impressum" class="footer-legal-link">Impressum</a>
            <span style="color: #333333;">•</span>
            <a href="/datenschutz" class="footer-legal-link">Datenschutz</a>
            <span style="color: #333333;">•</span>
            <a href="/agb" class="footer-legal-link">AGB</a>
          </div>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};




export default config;
