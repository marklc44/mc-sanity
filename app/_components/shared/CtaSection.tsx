import Link from 'next/link'
import { Button } from './Button'
import ContactFormButton from '../forms/ContactForm/ContactFormButton'

const CtaSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-xl text-muted-foreground">
          Let's discuss your project and see how I can help bring your ideas to
          life. From concept to deployment, I'll guide you through every step.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ContactFormButton text="Get In Touch" />
          <Button
            asChild
            variant="outline"
            size="lg"
            href="/about"
          >
            <Link href="/about">Learn More About Me</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CtaSection
