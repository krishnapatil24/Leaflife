import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import CropCard from '../components/CropCard.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { crops } from '../data/index.js'

function Crops() {
  const [query, setQuery] = useState('')
  const filteredCrops = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase()
    if (!normalizedQuery) return crops

    return crops.filter((crop) =>
      `${crop.name} ${crop.description}`.toLocaleLowerCase().includes(normalizedQuery),
    )
  }, [query])

  return (
    <>
      <section className="border-b border-leaf-border bg-leaf-earth py-14 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf-forest">
              Crop Resources
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
              Explore crop information
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg">
              Browse the prototype crop directory. Content is illustrative and is
              not agronomic guidance.
            </p>
            <p className="mt-3 text-xs font-medium text-leaf-muted">
              Demo crop entries — verify any agricultural information before use.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section bg-leaf-background">
        <Container>
          <SectionHeading
            eyebrow="Crop directory"
            title="Crop resources for exploration"
            description="The local crop dataset powers this prototype directory."
          />
          <div className="mt-8 max-w-lg">
            <label
              htmlFor="crop-search"
              className="mb-2 block text-sm font-semibold text-leaf-text"
            >
              Search crops
            </label>
            <div className="relative">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-leaf-muted"
              />
              <input
                id="crop-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search crops..."
                className="min-h-11 w-full rounded-lg border border-leaf-border bg-white py-2 pl-10 pr-3 text-sm outline-none focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
              />
            </div>
          </div>
          <p aria-live="polite" className="mt-5 text-sm">
            Showing {filteredCrops.length}{' '}
            {filteredCrops.length === 1 ? 'crop' : 'crops'}
          </p>
          {filteredCrops.length ? (
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {filteredCrops.map((crop, index) => (
                <Reveal key={crop.id} delay={index * 0.025}>
                  <CropCard crop={crop} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-5 border border-dashed border-leaf-border bg-white p-10 text-center">
              <h2 className="text-xl">No crops found</h2>
              <p className="mt-2 text-sm">Try a different search.</p>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setQuery('')}
                className="mt-5"
              >
                Clear Search
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}

export default Crops
