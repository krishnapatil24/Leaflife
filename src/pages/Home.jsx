import {
  ArrowRight,
  BookOpenCheck,
  FlaskConical,
  Leaf,
  Microscope,
  PackageCheck,
  Search,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import CropCard from '../components/CropCard.jsx'
import FarmerStoryCard from '../components/FarmerStoryCard.jsx'
import FieldVisual from '../components/FieldVisual.jsx'
import NewsCard from '../components/NewsCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import VisualPlaceholder from '../components/VisualPlaceholder.jsx'
import { crops, farmerStories, news, products } from '../data/index.js'

const demoStats = [
  { value: '10+', label: 'Product categories (demo)' },
  { value: '25+', label: 'Solutions (demo)' },
  { value: '8', label: 'Crop categories (demo)' },
  { value: '100%', label: 'Farmer focus (concept)' },
]

const intendedValues = [
  {
    number: '01',
    title: 'Science Driven',
    description:
      'A proposed editorial direction centered on evidence-led agriculture.',
    Icon: Microscope,
  },
  {
    number: '02',
    title: 'Quality Focused',
    description:
      'An intended commitment to clear, verified product information.',
    Icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Farmer Centric',
    description:
      'A proposed focus on practical grower needs and accessible guidance.',
    Icon: UsersRound,
  },
  {
    number: '04',
    title: 'Responsible Agriculture',
    description:
      'A concept for thoughtful communication about agricultural practices.',
    Icon: Leaf,
  },
]

const journey = [
  { number: '01', title: 'Understand', Icon: Search },
  { number: '02', title: 'Research', Icon: BookOpenCheck },
  { number: '03', title: 'Develop', Icon: FlaskConical },
  { number: '04', title: 'Test', Icon: Microscope },
  { number: '05', title: 'Deliver', Icon: PackageCheck },
]

function Home() {
  const featuredProducts = products.filter((product) => product.featured)
  const featuredCrops = crops.slice(0, 6)
  const featuredStories = farmerStories.slice(0, 3)
  const latestNews = [...news]
    .sort((first, second) => second.date.localeCompare(first.date))
    .slice(0, 3)

  return (
    <>
      <section className="overflow-hidden bg-leaf-background">
        <Container>
          <div className="grid items-center gap-10 py-14 sm:py-16 md:gap-12 lg:min-h-[640px] lg:grid-cols-2 lg:gap-16 lg:py-20">
            <Reveal className="relative z-10">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-leaf-forest sm:text-sm">
                Leaflife Crop Science
              </p>
              <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-leaf-text sm:text-5xl lg:text-6xl">
                Growing Better.
                <span className="mt-2 block text-leaf-primary">
                  Growing Together.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-leaf-muted sm:text-lg sm:leading-8">
                Science-driven agricultural solutions for healthier crops and a
                more productive future.
              </p>
              <p className="mt-3 text-xs font-medium text-leaf-muted">
                Website prototype · Company statements and imagery require
                verification.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/products">Explore Products</Button>
                <Button href="/about" variant="secondary">
                  Discover Our Approach
                </Button>
              </div>
              <Link
                to="/crops"
                className="mt-7 inline-flex min-h-11 items-center gap-2 rounded px-1 text-sm font-semibold text-leaf-primary transition-colors hover:text-leaf-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-primary"
              >
                Explore crop resources <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </Reveal>

            <Reveal delay={0.08}>
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
                eyebrow="About Leaflife"
                title="Rooted in agriculture. Driven by science."
                description="This prototype introduces Leaflife Crop Science as a place to explore agriculture-focused information. Replace this placeholder with the company's verified story, capabilities and approach."
              />
              <Button href="/about" variant="secondary" className="mt-7">
                Learn More
              </Button>
            </Reveal>
            <Reveal delay={0.08}>
              <VisualPlaceholder
                className="min-h-72 rounded-2xl sm:min-h-80"
                label="Illustrative placeholder visual for the company introduction"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="demo-statistics-heading"
        className="border-y border-leaf-border bg-leaf-soft py-12 sm:py-14"
      >
        <Container>
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="demo-statistics-heading" className="text-xl sm:text-2xl">
              A prototype starting point
            </h2>
            <p className="text-xs font-medium">
              Illustrative demo values; not company statistics.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4">
            {demoStats.map(({ value, label }) => (
              <div key={label} className="border-l-2 border-leaf-primary pl-4">
                <p className="text-3xl font-semibold tracking-tight text-leaf-primary sm:text-4xl">
                  {value}
                </p>
                <p className="mt-1 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-background">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Featured products"
                title="Explore the demo catalogue"
                description="Fictional prototype entries for layout and navigation testing. Product details and use instructions are not verified."
              />
              <Button href="/products" variant="secondary" className="shrink-0">
                View All Products
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.04}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-white">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Crop solutions"
                title="Crop resources for a changing landscape"
                description="Explore the prototype crop directory. Content is illustrative and should be reviewed before being used as agronomic guidance."
              />
              <Button href="/crops" variant="secondary" className="shrink-0">
                Explore All Crops
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {featuredCrops.map((crop, index) => (
              <Reveal key={crop.id} delay={index * 0.025}>
                <CropCard crop={crop} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-earth">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Leaflife"
              title="Principles for the story we want to tell"
              description="These are intended website messaging themes for the prototype, not independently verified certifications or performance claims."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {intendedValues.map(({ number, title, description, Icon }, index) => (
              <Reveal key={number} delay={index * 0.04}>
                <article className="h-full border-t border-leaf-primary/25 bg-leaf-white/80 p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-leaf-forest">
                      {number}
                    </span>
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-leaf-primary"
                      strokeWidth={1.7}
                    />
                  </div>
                  <h3 className="mt-7 text-lg">{title}</h3>
                  <p className="mt-2 text-sm">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="A conceptual journey"
              title="From understanding to delivery"
              description="A conceptual product-development journey for illustration only. This does not describe a verified Leaflife R&D or manufacturing process."
              alignment="center"
            />
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {journey.map(({ number, title, Icon }, index) => (
              <Reveal key={number} delay={index * 0.04}>
                <li className="relative flex h-full flex-col items-center border border-leaf-border bg-leaf-background px-4 py-6 text-center">
                  <span className="text-xs font-semibold tracking-widest text-leaf-forest">
                    {number}
                  </span>
                  <Icon
                    aria-hidden="true"
                    className="my-4 size-7 text-leaf-primary"
                    strokeWidth={1.6}
                  />
                  <h3 className="text-base">{title}</h3>
                  {index < journey.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 bg-leaf-white p-1 text-leaf-forest lg:block"
                    />
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section bg-leaf-background">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Farmer stories"
                title="Stories in a prototype voice"
                description="The following entries are fictional examples only, not real farmer identities, testimonials or product outcomes."
              />
              <Button
                href="/farmer-stories"
                variant="secondary"
                className="shrink-0"
              >
                View All Stories
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredStories.map((story, index) => (
              <Reveal key={story.id} delay={index * 0.04}>
                <FarmerStoryCard story={story} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-white">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Latest news"
                title="Updates from the prototype"
                description="Sample article content for the website prototype; these are not real company announcements."
              />
              <Button href="/news" variant="secondary" className="shrink-0">
                View All News
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {latestNews.map((article, index) => (
              <Reveal key={article.id} delay={index * 0.04}>
                <NewsCard article={article} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-leaf-primary py-14 text-leaf-white sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                  Leaflife Crop Science
                </p>
                <h2 className="mt-3 text-3xl leading-tight text-white sm:text-4xl">
                  Let&apos;s grow the future of agriculture together.
                </h2>
                <p className="mt-4 max-w-xl text-base text-white/80">
                  Explore our solutions, discover our crop resources, or get in
                  touch with the Leaflife team.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button
                  href="/products"
                  className="bg-white text-leaf-primary hover:bg-leaf-soft focus-visible:outline-white"
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
          </Reveal>
        </Container>
      </section>
    </>
  )
}

export default Home
