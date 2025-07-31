// @ts-nocheck
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: './vite_storybook.config.ts',
      },
    },
  },
  stories: [
    '../src/**/*.story.mdx',
    '../src/**/*.story.@(js|jsx|ts|tsx)',
    '../../app/src/**/*.story.mdx',
    '../../app/src/**/*.story.@(js|jsx|ts|tsx)',
    '../../admin/src/**/*.story.mdx',
    '../../admin/src/**/*.story.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-react-router-v6',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@storybook/addon-interactions',
    '@storybook/addon-designs',
  ],
  features: {
    interactionsDebugger: true,
  },
  typescript: {
    reactDocgen: 'react-docgen', // 👈 react-docgen configured here.
  },
  docs: {
    autodocs: true,
  },
}

export default config
