import {
  BookOpenCheck,
  FlaskConical,
  Leaf,
  Microscope,
  ShieldCheck,
  Sprout,
  UsersRound,
} from 'lucide-react'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import FieldVisual from '../components/FieldVisual.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import VisualPlaceholder from '../components/VisualPlaceholder.jsx'
import { company } from '../data/index.js'

const values = [
  {
    title: 'Science',
    description: 'A proposed focus on clear, evidence-aware agriculture.',
    Icon: Microscope,
  },
  {
    title: 'Quality',
    description: 'An intended emphasis on accurate, verified information.',
    Icon: ShieldCheck,
  },
  {
    title: 'Farmer Focus',
    description: 'A messaging principle centered on grower needs.',
    Icon: UsersRound,
  },
  {
    title: 'Responsible Agriculture',
    description: 'A concept for thoughtful agricultural communication.',
    Icon: Leaf,
  },
]

const journey = [
  { title: 'Company Beginning', note: 'Milestone to be verified.' },
  { title: 'Product Development', note: 'Milestone to be verified.' },
  { title: 'Growing Reach', note: 'Milestone to be verified.' },
  { title: 'Future Vision', note: 'Placeholder for the company’s future vision.' },
]

function About() {
  return (
    <>
      <section className="bg-leaf-earth py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf-forest">
                About Leaflife
              </p>
              <h1 className="mt-4 max-w-xl text-4xl leading-tight sm:text-5xl">
                Rooted in agriculture. Driven by science.
              </h1>
              <p className="mt-5 max-w-xl text-base sm:text-lg">
                Learn about Leaflife Crop Science through this website
                prototype. Company history, capabilities and claims will be
                added after verification.
              </p>
              {company.isDemo && (
                <p className="mt-4 text-xs font-medium text-leaf-muted">
                  Prototype content — replace with verified company information.
                </p>
              )}
            </Reveal>
            <Reveal delay={0.06}>
              <FieldVisual />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Company introduction"
                title={company.name}
                description={company.description}
              />
              {company.isDemo && (
                <p className="mt-4 text-xs font-medium text-leaf-muted">
                  Placeholder company description.
                </p>
              )}
            </Reveal>
            <Reveal delay={0.06}>
              <VisualPlaceholder
                className="min-h-72 rounded-xl sm:min-h-80"
                label="Agriculture-themed illustrative visual placeholder"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-background">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Vision & mission"
              title="A direction for the story"
              description="These statements are placeholders for future company-approved content."
            />
          </Reveal>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {[
              ['Vision', company.vision],
              ['Mission', company.mission],
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="h-full border border-leaf-border bg-leaf-white p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-leaf-forest">
                    {title}
                  </p>
                  <p className="mt-4 text-lg font-medium leading-8 text-leaf-text">
                    {text}
                  </p>
                  <p className="mt-4 text-xs text-leaf-muted">
                    Placeholder — to be supplied or approved by the company.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-earth">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Core values"
              title="Principles that shape the experience"
              description="These are intended website messaging themes, not independently verified company claims."
            />
          </Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, description, Icon }, index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article className="h-full border-t border-leaf-primary/30 bg-white/80 p-5 sm:p-6">
                  <Icon
                    aria-hidden="true"
                    className="size-6 text-leaf-primary"
                    strokeWidth={1.7}
                  />
                  <h3 className="mt-5 text-lg">{title}</h3>
                  <p className="mt-2 text-sm">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Science & innovation"
                title="A concept for turning questions into learning"
                description="The sequence below illustrates a general concept for an agricultural science journey. It is not a description of a verified Leaflife research, manufacturing or testing process."
              />
            </Reveal>
            <Reveal delay={0.06}>
              <ol className="divide-y divide-leaf-border border-y border-leaf-border">
                {[
                  ['01', 'Research', BookOpenCheck],
                  ['02', 'Development', FlaskConical],
                  ['03', 'Testing', Microscope],
                  ['04', 'Agricultural Solutions', Sprout],
                ].map(([number, title, Icon]) => (
                  <li
                    key={number}
                    className="flex items-center gap-4 py-4 sm:py-5"
                  >
                    <span className="w-8 text-xs font-semibold tracking-wider text-leaf-forest">
                      {number}
                    </span>
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-leaf-primary"
                      strokeWidth={1.7}
                    />
                    <span className="font-medium text-leaf-text">{title}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-background">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Quality & responsibility"
              title="Clear information matters"
              description="This prototype is designed to make room for accurate product information and responsible communication as verified company content becomes available."
            />
          </Reveal>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <Reveal>
              <article className="flex h-full gap-4 border border-leaf-border bg-leaf-white p-5 sm:p-7">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-leaf-soft text-leaf-primary">
                  <ShieldCheck aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl">Quality</h3>
                  <p className="mt-3 text-sm">
                    Product specifications, labels and quality credentials
                    should be published only after they have been verified.
                    No certifications or approvals are asserted here.
                  </p>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="flex h-full gap-4 border border-leaf-border bg-leaf-white p-5 sm:p-7">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-leaf-soft text-leaf-primary">
                  <Leaf aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl">Responsible Agriculture</h3>
                  <p className="mt-3 text-sm">
                    Future content can support informed decisions with
                    transparent, verified information and appropriate
                    professional guidance.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Company journey"
              title="Milestones to be written together"
              description="No company timeline has been verified for this prototype. These labels are placeholders, not historical claims."
            />
          </Reveal>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map(({ title, note }, index) => (
              <Reveal key={title} delay={index * 0.04}>
                <li className="h-full border-l-2 border-leaf-primary/40 bg-leaf-background p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-leaf-forest">
                    Demo milestone {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-4 text-lg">{title}</h3>
                  <p className="mt-2 text-sm">{note}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-leaf-primary py-14 text-white sm:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                Leaflife Crop Science
              </p>
              <h2 className="mt-3 text-3xl leading-tight text-white sm:text-4xl">
                Let&apos;s grow the future of agriculture together.
              </h2>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                href="/products"
                className="bg-white text-leaf-primary hover:bg-leaf-soft"
              >
                Explore Products
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default About
