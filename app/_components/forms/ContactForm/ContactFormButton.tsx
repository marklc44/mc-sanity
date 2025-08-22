'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/app/_components/shared/Button'
import { FaArrowRight } from 'react-icons/fa'

const ContactFormButton = ({ text }: { text: string }) => {
  const router = useRouter()

  const handleOpen = () => {
    router.replace('?contact=open', { scroll: false });
  }

  return (
    <Button
      size="lg"
      className="bg-highlight hover:bg-highlight/90 text-highlight-foreground"
      onClick={handleOpen}
    >
      <>
        <span>{text || 'Get In Touch'}</span>
        <FaArrowRight className="ml-2 h-4 w-4" />
      </>


    </Button>
  )
}

export default ContactFormButton