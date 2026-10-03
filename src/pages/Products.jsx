import { useMemo, useState } from 'react'
import { ArrowUpRight, Search, X } from 'lucide-react'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { products } from '../data/index.js'

function Products() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [crop, setCrop] = useState('')

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))].sort(),
    [],
  )
  const crops = useMemo(
    () => [...new Set(products.flatMap((product) => product.crops))].sort(),
    [],
  )

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase()

    return products.filter((product) => {
      const searchableText = [
        product.name,
        product.category,
        product.shortDescription,
        ...product.crops,
      ]
        .join(' ')
        .toLocaleLowerCase()

      return (
        (!normalizedQuery || searchableText.includes(normalizedQuery)) &&
        (!category || product.category === category) &&
        (!crop || product.crops.includes(crop))
      )
    })
  }, [query, category, crop])

  const hasActiveFilters = Boolean(query || category || crop)

  function clearFilters() {
    setQuery('')
    setCategory('')
    setCrop('')
  }

  return (
    <>
      <section className="border-b border-leaf-border bg-leaf-earth py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-leaf-forest">
                Our Products
              </p>
              <h1>Solutions for modern agriculture</h1>
              <p className="mt-4 text-base md:text-lg">
                Explore our range of agricultural solutions designed to support
                healthier crops and more informed farming.
              </p>
            </div>
            <span className="justify-self-start rounded-full border border-leaf-primary/20 bg-white/70 px-3 py-1.5 text-xs font-semibold text-leaf-primary lg:justify-self-end">
              Prototype catalogue · Demo data
            </span>
          </div>
        </Container>
      </section>

      <section aria-label="Product catalogue" className="bg-leaf-background py-10 sm:py-12">
        <Container>
          <div className="grid gap-4 rounded-xl border border-leaf-border bg-leaf-white p-4 sm:p-5 lg:grid-cols-[minmax(16rem,1fr)_minmax(12rem,0.45fr)_minmax(12rem,0.45fr)_auto] lg:items-end">
            <div>
              <label
                htmlFor="product-search"
                className="mb-2 block text-sm font-semibold text-leaf-text"
              >
                Search products
              </label>
              <div className="relative">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-leaf-muted"
                />
                <input
                  id="product-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products..."
                  className="min-h-11 w-full rounded-lg border border-leaf-border bg-white py-2 pl-10 pr-3 text-sm text-leaf-text outline-none transition focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="product-category"
                className="mb-2 block text-sm font-semibold text-leaf-text"
              >
                Category
              </label>
              <select
                id="product-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="min-h-11 w-full rounded-lg border border-leaf-border bg-white px-3 py-2 text-sm text-leaf-text outline-none transition focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
              >
                <option value="">All categories</option>
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="product-crop"
                className="mb-2 block text-sm font-semibold text-leaf-text"
              >
                Crop
              </label>
              <select
                id="product-crop"
                value={crop}
                onChange={(event) => setCrop(event.target.value)}
                className="min-h-11 w-full rounded-lg border border-leaf-border bg-white px-3 py-2 text-sm text-leaf-text outline-none transition focus:border-leaf-primary focus:ring-2 focus:ring-leaf-primary/20"
              >
                <option value="">All crops</option>
                {crops.map((item) => (
                  <option key={item} value={item}>
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
                className="justify-self-start lg:mb-0.5"
              >
                <X aria-hidden="true" size={16} />
                Clear Filters
              </Button>
            )}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="product-results-heading"
        className="bg-leaf-background pb-16 sm:pb-20 lg:pb-24"
      >
        <Container>
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-leaf-border pb-4">
            <h2 id="product-results-heading" className="text-lg font-semibold">
              Product catalogue
            </h2>
            <p aria-live="polite" className="text-sm">
              Showing {filteredProducts.length}{' '}
              {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <Reveal key={product.id} delay={index * 0.025}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div
              className="flex min-h-72 flex-col items-center justify-center border border-dashed border-leaf-border bg-leaf-white px-5 py-12 text-center"
              role="status"
            >
              <div className="mb-4 grid size-12 place-items-center rounded-full bg-leaf-soft text-leaf-primary">
                <Search aria-hidden="true" size={21} />
              </div>
              <h3 className="text-xl">No products found</h3>
              <p className="mt-2 max-w-sm text-sm">
                Try changing your search or filters.
              </p>
              <Button
                type="button"
                onClick={clearFilters}
                variant="secondary"
                className="mt-6"
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
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-leaf-forest">
                Find a product
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl">
                Need help exploring the catalogue?
              </h2>
              <p className="mt-3 text-sm">
                Product information in this prototype is illustrative. Contact
                details and product guidance should be confirmed before use.
              </p>
            </div>
            <Button href="/contact" className="shrink-0">
              Contact Us <ArrowUpRight aria-hidden="true" size={16} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Products
