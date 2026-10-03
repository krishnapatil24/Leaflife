import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import FarmerStoryCard from '../components/FarmerStoryCard.jsx'
import FieldVisual from '../components/FieldVisual.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { farmerStories } from '../data/index.js'

function FarmerStories() {
  const [query, setQuery] = useState('')
  const [crop, setCrop] = useState('')
  const crops = useMemo(
    () => [...new Set(farmerStories.map((story) => story.crop))].sort(),
    [],
  )
  const stories = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase()
    return farmerStories.filter((story) =>
      (!crop || story.crop === crop) &&
      (!normalizedQuery ||
        [
          story.farmerName,
          story.location,
          story.crop,
          story.title,
          story.summary,
        ]
          .join(' ')
          .toLocaleLowerCase()
          .includes(normalizedQuery)),
    )
  }, [crop, query])
  const filtersActive = Boolean(query || crop)

  function clearFilters() {
    setQuery('')
    setCrop('')
  }

  return (
    <>
      <section className="bg-leaf-earth py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf-forest">
                Farmer Stories
              </p>
              <h1 className="mt-4 max-w-xl text-4xl leading-tight sm:text-5xl">
                Voices and stories from the field
              </h1>
              <p className="mt-5 max-w-xl text-base sm:text-lg">
                Explore sample stories created to demonstrate how grower
                perspectives could be shared on this website.
              </p>
              <p className="mt-4 text-xs font-semibold text-leaf-muted">
                All stories below are fictional prototype content, not real
                farmer identities or testimonials.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <FieldVisual />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Prototype stories"
              title="An example story collection"
              description="These fictional entries help preview the story format. Replace them with approved, consented stories before publication."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(12rem,0.6fr)_auto] sm:items-end">
            <div>
              <label
                htmlFor="farmer-story-search"
                className="mb-2 block text-sm font-semibold text-leaf-text"
              >
                Search demo stories
              </label>
              <div className="relative">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-leaf-muted"
                />
                <input
                  id="farmer-story-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by crop, location, or story..."
                  className="min-h-11 w-full rounded-lg border border-leaf-border bg-white py-2 pl-10 pr-3 text-sm text-leaf-text outline-none transition focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="farmer-story-crop"
                className="mb-2 block text-sm font-semibold text-leaf-text"
              >
                Filter by crop
              </label>
              <select
                id="farmer-story-crop"
                value={crop}
                onChange={(event) => setCrop(event.target.value)}
                className="min-h-11 w-full rounded-lg border border-leaf-border bg-white px-3 py-2 text-sm text-leaf-text outline-none focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
              >
                <option value="">All crops</option>
                {crops.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {filtersActive && (
              <Button
                type="button"
                variant="secondary"
                onClick={clearFilters}
                className="w-full sm:w-auto"
              >
                Clear Filters
              </Button>
            )}
          </div>

          <p aria-live="polite" className="mt-6 text-sm">
            Showing {stories.length} {stories.length === 1 ? 'story' : 'stories'}
          </p>
          {stories.length ? (
            <div className="mt-5 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
              {stories.map((story, index) => (
                <Reveal key={story.id} delay={index * 0.035}>
                  <FarmerStoryCard story={story} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-5 border border-dashed border-leaf-border bg-leaf-background px-5 py-12 text-center">
              <h2 className="text-xl">No stories found</h2>
              <p className="mt-2 text-sm">Try changing your search or crop.</p>
              <Button
                type="button"
                variant="secondary"
                onClick={clearFilters}
                className="mt-5"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </Container>
      </section>

      <section className="border-t border-leaf-border bg-leaf-soft py-12 sm:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl">
                Have a question for the team?
              </h2>
              <p className="mt-2 text-sm">
                Contact details and support information are to be verified.
              </p>
            </div>
            <Button href="/contact">Contact Us</Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default FarmerStories
