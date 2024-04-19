'use client'
import Link from 'next/link'
import { ReactNode, useRef } from 'react'

interface Props {
  children: ReactNode
  content?: ReactNode | string
  dialogId: string
}

export default function Modal({ children, content, dialogId }: Props) {
  const modalRef = useRef<HTMLDialogElement>(null)
  const handleClick = () => {
    modalRef?.current?.showModal()
  }

  return (
    <>
      <Link
        href={``}
        onClick={handleClick}
      >
        {children}
      </Link>
      <dialog
        ref={modalRef}
        id={dialogId}
      >
        <div className="modal-box">{content}</div>
        <form
          method="dialog"
          className="modal-backdrop"
        >
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}
