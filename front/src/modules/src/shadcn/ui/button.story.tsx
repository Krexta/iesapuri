import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import { within } from '@storybook/test'

import { Button } from './button'

export default {
  title: 'modules/shadcn/Button',
  component: Button,
} as Meta<typeof Button>
type Story = StoryObj<typeof Button>

const baseProps = {}

const Template: StoryFn<typeof Button> = additionalProps => {
  const props = { ...baseProps, ...additionalProps }
  return (
      <Button {...props} />
  )
}

export const Primary: Story = {
  render: Template,
  play: ({ canvasElement }) => {
    within(canvasElement)
  },
}


