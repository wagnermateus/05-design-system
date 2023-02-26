import * as ToastComponent from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

import {
  ToastCloseButton,
  ToastContainer,
  ToastDescription,
  ToastHeader,
  ToastTitle,
} from './styles'

export interface ToastProps {
  title: string
  description: string
  duration: number
}

export function Toast({ title, description, duration }: ToastProps) {
  return (
    <ToastComponent.Provider duration={duration}>
      <ToastContainer>
        <ToastHeader>
          <ToastTitle asChild>
            <strong>{title}</strong>
          </ToastTitle>
          <ToastCloseButton asChild>
            <X size={20} />
          </ToastCloseButton>
        </ToastHeader>

        <ToastDescription asChild>
          <span>{description}</span>
        </ToastDescription>
      </ToastContainer>
      <ToastComponent.Viewport />
    </ToastComponent.Provider>
  )
}
Toast.displayName = 'Toast'
