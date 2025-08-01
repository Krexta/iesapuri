import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'
import { describe, test,  } from 'vitest'

import * as stories from './button.story'

const { Primary,  } = composeStories(stories)

describe('shadcn/Button', () => {
  test('Primary', async () => {
    const { container } = render(<Primary />)
    Primary.play({ canvasElement: container })
  })

})
