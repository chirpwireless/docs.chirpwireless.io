// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chirp',
  tagline: 'Chirp docs',
  url: 'https://docs.chirpwireless.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo_black.jpg',
      navbar: {
        title: 'Chirp Wireless',
        logo: {
          alt: 'Chirpwireless Logo',
          src: 'img/logo.jpg',
          width: '40px',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Wiki',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Client Wiki',
          },
          { to: 'https://chirpwireless.io', label: 'Main site', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              { label: 'Medium', href: 'https://chirpiot.medium.com' },
              { label: 'YouTube', href: 'https://www.youtube.com/channel/UClG9ngaNeWJ-3EhQK0tJ5mQ' },
              { label: 'Twitter', href: 'https://twitter.com/ChirpIoT' },
              { label: 'Discord', href: 'https://discord.com/invite/zxAaVQgFvs' },
              { label: 'Telegram', href: 'https://t.me/ChirpIoT' },
              { label: 'Reddit', href: 'https://www.reddit.com/r/ChirpIoT/' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chirp. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
