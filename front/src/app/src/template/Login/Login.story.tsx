import { AppStateContainer } from '@app/context/AppStateContainer'
import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'

import { Login } from './Login'

export default {
  title: 'template/Login',
  component: Login,
} as Meta<typeof Login>
type Story = StoryObj<typeof Login>

const initialState = {
  user: null
}

const baseProps = {}

const Template: StoryFn<typeof Login> = additionalProps => {
  const props = { ...baseProps, ...additionalProps }
  return (
    <AppStateContainer.Provider initialState={initialState}>
      <Login {...props} />
    </AppStateContainer.Provider>
  )
}

export const Primary: Story = {
  render: Template,
  play: ({ canvasElement }) => {
    within(canvasElement)
  },
}


