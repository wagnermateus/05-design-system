import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  width: '13.6875rem',
  maxHeight: '3.25rem',
  background: '$gray900',
  borderRadius: 5,

  textAlign: 'center',
  color: '$gray100',
  fontWeight: 500,
  fontSize: '$md',
  padding: '0.75rem 1rem',
})
