import { useState } from 'react'
import { Mail, MapPin, Phone, RotateCcw } from 'lucide-react'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { company } from '../data/index.js'

const enquiryTypes = [
  'General Enquiry',
  'Product Enquiry',
  'Dealer Enquiry',
  'Farmer Support',
  'Business Enquiry',
  'Other',
]

const faqs = [
  {
    question: 'How can I learn about Leaflife products?',
    answer:
      'Browse the product catalogue prototype. Its entries are demo content; request verified product information through the contact form when available.',
  },
  {
    question: 'How can I find a dealer?',
    answer:
      'Visit the Locations page to view the prototype directory. Current listings are not verified, so please confirm details directly before relying on them.',
  },
  {
    question: 'How can I contact the company?',
    answer:
      'Use this prototype form to preview the enquiry flow. It does not send or store your information.',
  },
  {
    question: 'Where can I find product information?',
    answer:
      'The product catalogue and detail pages contain sample information only. Consult approved product labeling and qualified guidance for actual use.',
  },
  {
    question: 'Are the stories and offers on this website real?',
    answer:
      'No. Current stories, offers, articles and catalogue entries are marked as demo or prototype content and are not verified company statements.',
  },
]

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  enquiryType: '',
  message: '',
}

function isPlaceholder(value) {
  return !value || /^(replace with verified|information to be updated)/i.test(value)
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setSubmitted(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setForm(initialForm)
    setSubmitted(true)
  }

  function resetForm() {
    setForm(initialForm)
    setSubmitted(false)
  }

  const contactItems = [
    {
      label: 'Phone',
      value: isPlaceholder(company.contact.phone)
        ? 'Information to be updated'
        : company.contact.phone,
      Icon: Phone,
    },
    {
      label: 'Email',
      value: isPlaceholder(company.contact.email)
        ? 'Information to be updated'
        : company.contact.email,
      Icon: Mail,
    },
    {
      label: 'Address',
      value: isPlaceholder(company.contact.address)
        ? 'Information to be updated'
        : company.contact.address,
      Icon: MapPin,
    },
  ]

  return (
    <>
      <section className="border-b border-leaf-border bg-leaf-earth py-14 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf-forest">
              Get in touch
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
              Let&apos;s start a conversation
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg">
              Have a product enquiry, dealer question, or general request? We&apos;d
              be happy to hear from you.
            </p>
            <p className="mt-3 text-xs font-medium text-leaf-muted">
              Contact details and this form are prototype content. The form does
              not send or save information.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section bg-leaf-background">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <Reveal>
              <SectionHeading
                eyebrow="Contact information"
                title="How to reach us"
                description="Verified company contact details will be added when available."
              />
              <div className="mt-7 space-y-3">
                {contactItems.map(({ label, value, Icon }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 border border-leaf-border bg-leaf-white p-4"
                  >
                    <Icon
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-leaf-primary"
                    />
                    <div>
                      <h2 className="text-sm font-semibold tracking-normal">
                        {label}
                      </h2>
                      <p className="mt-1 break-words text-sm">{value}</p>
                      {company.isDemo && (
                        <p className="mt-1 text-xs text-leaf-muted">
                          Replace with verified information
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                <p className="px-1 text-xs text-leaf-muted">
                  Business hours: Information to be updated.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <form
                onSubmit={handleSubmit}
                onReset={resetForm}
                className="border border-leaf-border bg-leaf-white p-5 sm:p-7 lg:p-8"
              >
                <div className="mb-6">
                  <h2 className="text-2xl">Send an enquiry</h2>
                  <p className="mt-2 text-sm">
                    Frontend demo only. No information leaves this page.
                  </p>
                </div>

                {submitted && (
                  <p
                    role="status"
                    className="mb-6 border-l-4 border-leaf-primary bg-leaf-soft p-4 text-sm font-medium text-leaf-text"
                  >
                    Thank you. This demo submission is complete; no
                    information was sent or saved.
                  </p>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-leaf-text"
                    >
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="fullName"
                      autoComplete="name"
                      value={form.fullName}
                      onChange={updateField}
                      required
                      maxLength={100}
                      className="min-h-11 w-full rounded-lg border border-leaf-border px-3 py-2 text-sm outline-none focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-leaf-text"
                    >
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={updateField}
                      required
                      maxLength={254}
                      className="min-h-11 w-full rounded-lg border border-leaf-border px-3 py-2 text-sm outline-none focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-sm font-semibold text-leaf-text"
                    >
                      Phone <span className="font-normal text-leaf-muted">(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={updateField}
                      pattern="\+?[0-9][0-9 \-]{5,18}[0-9]"
                      title="Enter 7–20 characters using digits, spaces, +, or hyphens, starting and ending with a digit."
                      maxLength={20}
                      className="min-h-11 w-full rounded-lg border border-leaf-border px-3 py-2 text-sm outline-none focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-enquiry-type"
                      className="mb-2 block text-sm font-semibold text-leaf-text"
                    >
                      Enquiry Type <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="contact-enquiry-type"
                      name="enquiryType"
                      value={form.enquiryType}
                      onChange={updateField}
                      required
                      className="min-h-11 w-full rounded-lg border border-leaf-border bg-white px-3 py-2 text-sm outline-none focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
                    >
                      <option value="">Select an enquiry type</option>
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-semibold text-leaf-text"
                    >
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={updateField}
                      required
                      minLength={10}
                      maxLength={2000}
                      rows={5}
                      className="w-full resize-y rounded-lg border border-leaf-border px-3 py-2 text-sm outline-none focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
                    />
                    <p className="mt-1 text-right text-xs text-leaf-muted">
                      {form.message.length}/2000
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" className="w-full sm:w-auto">
                    Submit Enquiry
                  </Button>
                  <Button
                    type="reset"
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    <RotateCcw aria-hidden="true" size={15} />
                    Reset Form
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-white">
        <Container>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="A few helpful notes"
            description="Answers for this prototype website. Please verify company and product information before relying on it."
          />
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-leaf-border border-y border-leaf-border">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-4">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded font-semibold text-leaf-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-primary [&::-webkit-details-marker]:hidden">
                  {question}
                  <span
                    aria-hidden="true"
                    className="text-xl font-normal text-leaf-primary transition-transform group-open:rotate-45 motion-reduce:transition-none"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-2 pr-8 pt-3 text-sm leading-6">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-leaf-border bg-leaf-soft py-12 sm:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl">
                Explore Leaflife Crop Science
              </h2>
              <p className="mt-2 text-sm">
                Browse prototype product information or learn about the
                company.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href="/products" className="w-full sm:w-auto">
                View Products
              </Button>
              <Button
                href="/about"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                About Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Contact
