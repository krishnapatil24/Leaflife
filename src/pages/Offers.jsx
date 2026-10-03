import { useMemo, useState } from 'react'
import { X } from 'lucide-react'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import OfferCard from '../components/OfferCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { offers } from '../data/index.js'

function Offers() {
  const [category, setCategory] = useState('')

  const categories = useMemo(
    () => [...new Set(offers.map((offer) => offer.category))].sort(),
    [],
  )
  const filteredOffers = useMemo(
    () =>
      offers.filter((offer) => !category || offer.category === category),
    [category],
  )

  return (
    <>
      <section className="border-b border-leaf-border bg-leaf-earth py-14 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-leaf-forest">
                  Offers & Updates
                </p>
                <h1>Explore current opportunities</h1>
                <p className="mt-4 text-base md:text-lg">
                  Discover product promotions and seasonal information.
                </p>
              </div>
              <span className="self-start rounded-full border border-leaf-primary/20 bg-white/70 px-3 py-1.5 text-xs font-semibold text-leaf-primary sm:self-auto">
                Prototype offers · Demo content
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-leaf-background py-10 sm:py-12">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="w-full sm:max-w-sm">
              <label
                htmlFor="offer-category"
                className="mb-2 block text-sm font-semibold text-leaf-text"
              >
                Filter by category
              </label>
              <select
                id="offer-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="min-h-11 w-full rounded-lg border border-leaf-border bg-leaf-white px-3 py-2 text-sm text-leaf-text outline-none transition focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
              >
                <option value="">All categories</option>
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {category && (
              <Button
                type="button"
                variant="ghost"
                onClick={() => setCategory('')}
                className="self-start"
              >
                <X aria-hidden="true" size={16} />
                Clear Filter
              </Button>
            )}
            <p aria-live="polite" className="text-sm sm:ml-auto">
              Showing {filteredOffers.length}{' '}
              {filteredOffers.length === 1 ? 'offer' : 'offers'}
            </p>
          </div>
        </Container>
      </section>

      <section
        aria-label="Offers catalogue"
        className="bg-leaf-background pb-16 sm:pb-20 lg:pb-24"
      >
        <Container>
          {filteredOffers.length > 0 ? (
            <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredOffers.map((offer, index) => (
                <Reveal key={offer.id} delay={index * 0.035}>
                  <OfferCard offer={offer} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-leaf-border bg-leaf-white px-5 py-14 text-center">
              <h2 className="text-xl">No offers found</h2>
              <p className="mt-2 text-sm">Check back for future updates.</p>
            </div>
          )}
        </Container>
      </section>

      <section className="border-t border-leaf-border bg-leaf-soft py-12 sm:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-leaf-forest">
                Leaflife Crop Science
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl">Want to know more?</h2>
              <p className="mt-3 text-sm">
                Offer information on this page is prototype content, not a
                current campaign or promotion.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href="/contact" className="w-full sm:w-auto">
                Contact Us
              </Button>
              <Button
                href="/products"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Explore Products
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Offers
