import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Conventional Commit Spec",
  description: "Mandatory conventional-commit, branching, PR, and release standards for Mediusware contributors.",
  base: '/conventional-commit-spec/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],
  themeConfig: {
    logo: { light: '/logo.svg', dark: '/logo.svg', alt: "Conventional Commit Spec" },
    siteTitle: "Conventional Commit Spec",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Getting started', link: '/getting-started' },
      {
        text: 'GitHub',
        link: 'https://github.com/mediuswareltd/conventional-commit-spec'
      }
    ],
    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Getting started', link: '/getting-started' },
          { text: 'Guide', link: '/guide' },
          { text: 'About', link: '/about' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mediuswareltd/conventional-commit-spec' }
    ],
    footer: {
      message: 'Built by Mediusware',
      copyright: 'Copyright © Mediusware Ltd'
    },
    editLink: {
      pattern: 'https://github.com/mediuswareltd/conventional-commit-spec/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    search: {
      provider: 'local'
    },
    outline: [2, 3]
  }
,
  vite: {
    css: {
      postcss: {
        plugins: []
      }
    }
  }
})
