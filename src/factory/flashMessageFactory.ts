import { ReactNode } from 'react'
// @ts-ignore
import { v4 as uuidv4 } from 'uuid'

const DEFAULT_FLASH_MESSAGE_DURATION = 5000

const createFlashMessage = (
  title: string,
  content?: JSX.Element | null | ReactNode,
  severity = 'success',
  duration?: number
) => ({
  identifier: uuidv4(),
  title,
  content,
  severity,
  duration: duration || DEFAULT_FLASH_MESSAGE_DURATION
})

export default createFlashMessage