'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Spinner from '@/app/_components/shared/Spinner'
import { z, ZodError } from 'zod'
import clsx from 'clsx'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'

const noHtml = /^[^<>]*$/

const ContactFormSchema = z.object({
  firstName: z.string().nonempty('First name is required').regex(noHtml, 'No HTML allowed'),
  lastName: z.string().nonempty('Last name is required').regex(noHtml, 'No HTML allowed'),
  email: z.string().email('Enter a valid email').regex(noHtml, 'No HTML allowed'),
  company: z.string().nonempty('Company is required').regex(noHtml, 'No HTML allowed'),
  projectDescription: z.string().nonempty('Description is required').regex(noHtml, 'No HTML allowed'),

})

export default function ContactFormDialog() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [postSubmissionMessage, setPostSubmissionMessage] = useState('')

  const [form, setForm] = useState({
    firstName: { value: '', error: '' },
    lastName: { value: '', error: '' },
    email: { value: '', error: '' },
    company: { value: '', error: '' },
    projectDescription: { value: '', error: '' },
  })
  const searchParams = useSearchParams()
  const router = useRouter()

  const isOpen = searchParams.get('contact') === 'open'

  const handleOpen = () => {
    router.replace('?contact=open', { scroll: false });
  }

  const handleClose = () => {
    setForm({
      firstName: { value: '', error: '' },
      lastName: { value: '', error: '' },
      email: { value: '', error: '' },
      company: { value: '', error: '' },
      projectDescription: { value: '', error: '' },
    })
    setPostSubmissionMessage('')
    router.push(window.location.pathname, { scroll: false })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // Get the corresponding Zod schema key
    const singleFieldSchema = ContactFormSchema.shape[name as keyof typeof ContactFormSchema.shape]

    const result = singleFieldSchema.safeParse(value)

    setForm(prev => ({
      ...prev,
      [name]: {
        value,
        error: result.success ? '' : (result.error as ZodError).issues?.[0]?.message || 'Invalid input',
      },
    }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    const singleFieldSchema = ContactFormSchema.shape[name as keyof typeof ContactFormSchema.shape]
    const result = singleFieldSchema.safeParse(form[name as keyof typeof form].value)
    setForm(prev => ({
      ...prev,
      [name]: {
        ...prev[name as keyof typeof form],
        error: result.success ? '' : (result.error as ZodError).issues?.[0]?.message || 'Invalid input',
      },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPostSubmissionMessage('')

    const formErrors = Object.values(form).filter(field => field.error).map(field => field.error)
    if (formErrors.length > 0) {
      setPostSubmissionMessage(formErrors.join(', '))
      return
    }

    // Proceed with form submission
    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
    const formGuid = '510c04d9-7e45-4848-b6eb-10a2962f98f9'
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`

    const payload = {
      fields: [
        { name: 'firstname', value: form.firstName.value },
        { name: 'lastname', value: form.lastName.value },
        { name: 'email', value: form.email.value },
        { name: 'company', value: form.company.value },
        { name: 'project_description', value: form.projectDescription.value },
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    }

    setIsSubmitting(true)

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setForm({
          firstName: { value: '', error: '' },
          lastName: { value: '', error: '' },
          email: { value: '', error: '' },
          company: { value: '', error: '' },
          projectDescription: { value: '', error: '' }
        })
        setPostSubmissionMessage("Success! I'll be in touch soon.")
        setTimeout(() => handleClose(), 3000)
      } else {
        setPostSubmissionMessage('There was a problem submitting the form.')
      }
    } catch (err) {
      console.error(err)
      setPostSubmissionMessage('There was a problem submitting the form.')
    }

    setIsSubmitting(false)
  }


  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed top-10 right-8 z-50 px-4 py-2 bg-highlight hover:bg-highlight/80 text-white rounded shadow-md"
      >
        Contact
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="translate-y-full opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="translate-y-full opacity-0"
          >

            <div className="fixed bottom-0 w-full h-[90vh] bg-slate-50 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] overflow-auto">
              <button
                onClick={handleClose}
                className="absolute top-4 right-8 text-gray-500 hover:text-black text-2xl leading-none"
                aria-label="Close"
              >
                &times;
              </button>
              <div className="max-w-5xl mx-auto h-full flex flex-col sm:flex-row">

                {/* Left Column */}
                <div className="w-full sm:w-1/2 p-6 flex items-center justify-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Let’s Talk</h2>
                    <p className="text-gray-700">
                      I'd love to hear about your project. Fill out the form or contact me on <Link
                        className="link"
                        target="_blank"
                        href="https://www.linkedin.com/in/markcentoni/"
                      >LinkedIn</Link> and I'll be in touch soon.
                    </p>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center">
                  <Dialog.Title className="text-xl font-bold mb-4">Tell me about your project</Dialog.Title>
                  <form onSubmit={handleSubmit} className="space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FieldWrapper>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={form.firstName.value}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                          className={clsx(
                            "border border-gray-300 p-2 rounded w-full outline-none transition-shadow duration-200 mb-0.5",
                            form.firstName.error && "outline outline-2 outline-red-500 border-0"
                          )}
                        />
                        <FieldError error={form.firstName.error} />
                      </FieldWrapper>
                      <FieldWrapper>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={form.lastName.value}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                          className={clsx(
                            "border border-gray-300 p-2 rounded w-full outline-none transition-shadow duration-200 mb-0.5",
                            form.lastName.error && "outline outline-2 outline-red-500 border-0"
                          )}
                        />
                        <FieldError error={form.lastName.error} />
                      </FieldWrapper>
                    </div>
                    <FieldWrapper>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={form.company.value}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={clsx(
                          "border border-gray-300 p-2 rounded w-full outline-none transition-shadow duration-200 mb-0.5",
                          form.company.error && "outline outline-2 outline-red-500 border-0"
                        )}
                      />
                      <FieldError error={form.company.error} />
                    </FieldWrapper>
                    <FieldWrapper>
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={form.email.value}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={clsx(
                          "border border-gray-300 p-2 rounded w-full outline-none transition-shadow duration-200 mb-0.5",
                          form.email.error && "outline outline-2 outline-red-500 border-0"
                        )}
                      />
                      <FieldError error={form.email.error} />
                    </FieldWrapper>
                    <FieldWrapper>
                      <textarea
                        name="projectDescription"
                        placeholder="Tell me about your project..."
                        value={form.projectDescription.value}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        rows={4}
                        required
                        className={clsx(
                          "border border-gray-300 p-2 rounded w-full outline-none transition-shadow duration-200 mb-0.5",
                          form.projectDescription.error && "outline outline-2 outline-red-500 border-0"
                        )}
                      />
                      <FieldError error={form.projectDescription.error} />
                    </FieldWrapper>
                    <div className="flex justify-between mt-4">
                      <button type="button" onClick={handleClose} className="text-gray-500">
                        Cancel
                      </button>
                      <button type="submit" className="transition duration-300 bg-highlight hover:bg-highlight/80 text-white px-4 py-2 rounded">
                        {!isSubmitting ? 'Submit' : <Spinner />}
                      </button>
                    </div>
                  </form>
                  {postSubmissionMessage && (
                    <div className="mt-4 text-center text-gray-600">
                      {postSubmissionMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export function FieldError({ error }: { error: string }) {
  return (
    <div className="text-red-500 text-sm min-h-[1.25rem]">
      {error}
    </div>
  )
}

export function FieldWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
    </div>
  )
}
