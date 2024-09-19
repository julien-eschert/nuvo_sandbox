import React from 'react'
import { toast } from 'react-toastify'

type Props = {
  message: any
}

export default function Message ({ message }: Props) {
  return (
    <div onMouseOver={() => {toast.update(message.identifier, { autoClose: false })}}>
      <p className='font-medium leading-5 mr-4 text-lg text-white'>{message.title}</p>
      {message.content &&
        <div className='text-white font-normal mt-4 mr-4 leading-6'>
          {message.content}
        </div>
      }
    </div>
  )
}