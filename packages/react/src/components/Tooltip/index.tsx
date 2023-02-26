import * as TooltipComponent from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

import { TooltipContent } from './styles'

export interface TooltipProps {
  content: string
  children: ReactNode
}
export function Tooltip({ content, children }: TooltipProps) {
  return (
    <TooltipComponent.Provider>
      <TooltipComponent.Root>
        <TooltipComponent.Trigger asChild>{children}</TooltipComponent.Trigger>
        <TooltipComponent.Portal>
          <TooltipContent>
            {content}
            <TooltipComponent.Arrow />
          </TooltipContent>
        </TooltipComponent.Portal>
      </TooltipComponent.Root>
    </TooltipComponent.Provider>
  )
}
