import React, { ReactNode } from 'react'
import {toast, TypeOptions} from 'react-toastify'
import createFlashMessage from '@/factory/flashMessageFactory'
import Message from "@/components/FlashMessage/Message";

const addFlashMessage = (title: string, content?: JSX.Element | null | ReactNode, type: TypeOptions = 'success', duration?: number): void => {
  const message = createFlashMessage(title, content, type, duration)
  const toastContent = <Message message={message} />

  toast(
    toastContent,
    {
      toastId: message.identifier,
      type: type
    }
  )
}

export default addFlashMessage