import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  width: '22.5rem',
  height: '5.125rem',
  background: '$gray800',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '0.25rem',

  padding: '0.75rem 1.25rem',

  border: '1px solid $gray600',
  borderRadius: 6,
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontWeight: 700,
  fontSize: '$xl',
  lineHeight: 1.6,
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  lineHeight: 1.6,
  fontSize: '$sm',
})

export const ToastCloseButton = styled(Toast.Close, {
  cursor: 'pointer',
})

export const ToastHeader = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',

  svg: {
    color: '$gray200',
  },
})
