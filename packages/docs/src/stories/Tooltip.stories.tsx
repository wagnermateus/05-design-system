import type { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@wagnermateus-ignite-ui/react'

export default {
  title: 'Calendar/Tooltip',
  component: Tooltip,
  args: {
    content: '21 de Outubro - Indisponível',
    children: (
      <Box
        css={{
          width: '4rem',
          height: '3rem',
        }}
      />
    ),
  },
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
