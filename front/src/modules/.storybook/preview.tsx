import React from 'react'

import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6'
import { initialize, mswLoader } from 'msw-storybook-addon'

initialize()

import '../src/scss/global.css'
import { a11yBaseRules } from '../src/test/a11y'


import type { Preview } from '@storybook/react'

const preview: Preview = {
  decorators: [
    withRouter,
    (Story) => {
      return (
          <Story />
      )
    },
  ],
  parameters: {
    reactRouter: reactRouterParameters({}),
    a11y: {
      // Optional selector to inspect
      element: '#storybook-root',
      config: {
        rules: a11yBaseRules,
      },
      // Axe's options parameter
      options: {},
      // Optional flag to prevent the automatic check
      manual: true,
    },
  },
  loaders: [mswLoader],
}

export default preview
