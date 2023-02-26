import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@wagnermateus-ignite-ui/react'

export default {
  title: 'Notifications/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    duration: 10000,
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
