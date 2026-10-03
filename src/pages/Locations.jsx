import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import LocationCard from '../components/LocationCard.jsx'
import LocationMapPanel from '../components/LocationMapPanel.jsx'
import Reveal from '../components/Reveal.jsx'
import { locations } from '../data/index.js'

function Locations() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('')

  const locationTypes = useMemo(
    () => [...new Set(locations.map((location) => location.type))].sort(),
    [],
  )

  const filteredLocations = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase()

    return locations.filter((location) => {
      const searchableText = [
        location.name,
        location.city,
        location.state,
        location.country,
      ]
        .filter(Boolean)
        .join(' ')
        .toLocaleLowerCase()

      return (
        (!normalizedQuery || searchableText.includes(normalizedQuery)) &&
        (!type || location.type === type)
      )
    })
  }, [query, type])

  const hasActiveFilters = Boolean(query || type)

  function clearFilters() {
    setQuery('')
    setType('')
  }

  return (
    <>
      <section className="border-b border-leaf-border bg-leaf-earth py-14 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-leaf-forest">
                  Our Network
                </p>
                <h1>Find Leaflife near you</h1>
                <p className="mt-4 text-base md:text-lg">
                  Explore our locations and network information.
                </p>
              </div>
              <p className="max-w-xs text-xs font-medium text-leaf-muted">
                Prototype directory · Entries and contact details are not verified.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-leaf-background py-10 sm:py-12">
        <Container>
          <div className="grid gap-4 rounded-xl border border-leaf-border bg-leaf-white p-4 sm:p-5 md:grid-cols-[minmax(0,1fr)_minmax(12rem,0.4fr)_auto] md:items-end">
            <div>
              <label
                htmlFor="location-search"
                className="mb-2 block text-sm font-semibold text-leaf-text"
              >
                Search locations
              </label>
              <div className="relative">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-leaf-muted"
                />
                <input
                  id="location-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by city or state..."
                  className="min-h-11 w-full rounded-lg border border-leaf-border bg-white py-2 pl-10 pr-3 text-sm text-leaf-text outline-none transition focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="location-type"
                className="mb-2 block text-sm font-semibold text-leaf-text"
              >
                Location type
              </label>
              <select
                id="location-type"
                value={type}
                onChange={(event) => setType(event.target.value)}
                className="min-h-11 w-full rounded-lg border border-leaf-border bg-white px-3 py-2 text-sm capitalize text-leaf-text outline-none transition focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
              >
                <option value="">All types</option>
                {locationTypes.map((item) => (
                  <option key={item} value={item} className="capitalize">
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {hasActiveFilters && (
              <Button
                type="button"
                variant="ghost"
                onClick={clearFilters}
                className="justify-self-start"
              >
                <X aria-hidden="true" size={16} />
                Clear Filters
              </Button>
            )}
          </div>
        </Container>
      </section>

      <section
        aria-label="Location directory and map"
        className="bg-leaf-background pb-16 sm:pb-20 lg:pb-24"
      >
        <Container>
          <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:gap-8">
            <div>
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-lg">Locations</h2>
                <p aria-live="polite" className="text-sm">
                  Showing {filteredLocations.length}{' '}
                  {filteredLocations.length === 1 ? 'location' : 'locations'}
                </p>
              </div>
              {filteredLocations.length > 0 ? (
                <div className="space-y-4">
                  {filteredLocations.map((location) => (
                    <Reveal key={location.id}>
                      <LocationCard location={location} />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="border border-dashed border-leaf-border bg-leaf-white px-5 py-12 text-center">
                  <h2 className="text-xl">No locations found</h2>
                  <p className="mt-2 text-sm">
                    Try changing your search or filter.
                  </p>
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
            </div>
            <Reveal>
              <LocationMapPanel locations={filteredLocations} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-leaf-border bg-leaf-white py-12 sm:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl">Can&apos;t find a location?</h2>
              <p className="mt-2 text-sm">
                Contact the team for verified network information.
              </p>
            </div>
            <Button href="/contact">Contact Us</Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Locations
