import {
  ArrowRight,
  Check,
  ChevronRight,
  Info,
  Leaf,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ProductImage from '../components/ProductImage.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { crops, products } from '../data/index.js'

function ProductNotFound() {
  return (
    <section className="grid min-h-[55vh] place-items-center px-4 py-16">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-leaf-forest">
          Product catalogue
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl">Product Not Found</h1>
        <p className="mt-3">This product could not be found.</p>
        <Button href="/products" variant="secondary" className="mt-7">
          Back to Products
        </Button>
      </div>
    </section>
  )
}

function ProductDetails() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)

  if (!product) return <ProductNotFound />

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .map((item) => ({
      product: item,
      sharedCrops: item.crops.filter((crop) => product.crops.includes(crop))
        .length,
      sameCategory: item.category === product.category,
    }))
    .filter(({ sharedCrops, sameCategory }) => sharedCrops > 0 || sameCategory)
    .sort(
      (first, second) =>
        Number(second.sameCategory) - Number(first.sameCategory) ||
        second.sharedCrops - first.sharedCrops,
    )
    .slice(0, 3)
    .map(({ product: related }) => related)

  const matchingCrops = product.crops.map((cropName) => ({
    name: cropName,
    crop: crops.find(
      (crop) => crop.name.toLocaleLowerCase() === cropName.toLocaleLowerCase(),
    ),
  }))

  return (
    <>
      <div className="border-b border-leaf-border bg-leaf-background">
        <Container>
          <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="rounded text-leaf-muted hover:text-leaf-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-primary"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-4 text-leaf-muted" />
              </li>
              <li>
                <Link
                  to="/products"
                  className="rounded text-leaf-muted hover:text-leaf-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-primary"
                >
                  Products
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-4 text-leaf-muted" />
              </li>
              <li
                aria-current="page"
                className="font-medium text-leaf-text"
              >
                {product.name}
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      <section className="bg-leaf-background py-10 sm:py-14 lg:py-16">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <ProductImage
                src={product.image}
                alt={`${product.name} product`}
                className="aspect-[4/3] w-full rounded-xl border border-leaf-border sm:rounded-2xl"
              />
            </Reveal>
            <Reveal delay={0.06}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-leaf-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-leaf-forest">
                  {product.category}
                </span>
                {product.isDemo && (
                  <span className="rounded-full border border-leaf-border bg-white px-3 py-1.5 text-xs font-semibold text-leaf-muted">
                    Demo product
                  </span>
                )}
              </div>
              <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 max-w-xl text-base sm:text-lg">
                {product.shortDescription}
              </p>

              <div className="mt-7">
                <h2 className="text-sm font-semibold tracking-normal">
                  Target crops
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {matchingCrops.map(({ name, crop }) => (
                    <li key={name}>
                      {crop ? (
                        <Link
                          to={`/crops/${crop.id}`}
                          className="inline-flex min-h-10 items-center rounded-full border border-leaf-border bg-white px-4 py-2 text-sm text-leaf-primary transition-colors hover:bg-leaf-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-primary"
                        >
                          {name}
                        </Link>
                      ) : (
                        <span className="inline-flex min-h-10 items-center rounded-full border border-leaf-border bg-white px-4 py-2 text-sm text-leaf-muted">
                          {name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-5 text-xs font-medium text-leaf-muted">
                Prototype product information · Verify details before use.
              </p>
              <Button href="/contact" className="mt-6 w-full sm:w-auto">
                Contact About This Product <ArrowRight aria-hidden="true" size={16} />
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Product information"
                title="Product Overview"
                description="Prototype description"
              />
            </Reveal>
            <Reveal delay={0.05}>
              <div className="max-w-3xl">
                {product.isDemo && (
                  <p className="mb-4 inline-flex items-center gap-2 rounded border border-leaf-border bg-leaf-background px-3 py-2 text-xs font-medium text-leaf-muted">
                    <Info aria-hidden="true" className="size-4 text-leaf-forest" />
                    Demo content — not a verified product claim.
                  </p>
                )}
                <p className="text-base leading-8 text-leaf-muted">
                  {product.description}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-background">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Product profile"
              title="A closer look"
              description="The information below is supplied by the local prototype dataset and should not be treated as verified usage guidance."
            />
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <section className="h-full border border-leaf-border bg-leaf-white p-5 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-leaf-soft text-leaf-primary">
                    <Leaf aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-xl">Benefits</h2>
                    <p className="text-xs">Demo information</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <li
                      key={`${product.id}-benefit-${index}`}
                      className="flex gap-3 text-sm leading-6"
                    >
                      <Check
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-leaf-forest"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal delay={0.05}>
              <section className="h-full border border-leaf-border bg-leaf-white p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl">Application Information</h2>
                  <span className="rounded-full bg-leaf-soft px-3 py-1.5 text-xs font-semibold text-leaf-primary">
                    Prototype information
                  </span>
                </div>
                <dl className="mt-6 divide-y divide-leaf-border">
                  {[
                    ['Application Method', product.application.method],
                    ['Dosage', product.application.dosage],
                    ['Timing', product.application.timing],
                  ].map(([term, detail]) => (
                    <div
                      key={term}
                      className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4"
                    >
                      <dt className="text-sm font-semibold text-leaf-text">
                        {term}
                      </dt>
                      <dd className="text-sm text-leaf-muted">{detail}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs leading-5 text-leaf-muted">
                  Not for actual application. Refer to verified product
                  labeling and qualified guidance before use.
                </p>
              </section>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Packaging"
                title="Pack Sizes"
                description="Demo pack-size placeholders only. Confirm commercial packaging from an authorized source."
              />
              <ul className="mt-6 flex flex-wrap gap-3">
                {product.packSizes.map((size) => (
                  <li
                    key={size}
                    className="border border-leaf-border bg-leaf-background px-4 py-3 text-sm font-medium text-leaf-text"
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.05}>
              <section className="border border-leaf-border bg-leaf-background p-5 sm:p-7">
                <h2 className="text-xl">Product Information</h2>
                <dl className="mt-4 divide-y divide-leaf-border">
                  <div className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4">
                    <dt className="text-sm font-semibold text-leaf-text">
                      Category
                    </dt>
                    <dd className="text-sm text-leaf-muted">
                      {product.category}
                    </dd>
                  </div>
                  <div className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4">
                    <dt className="text-sm font-semibold text-leaf-text">
                      Target Crops
                    </dt>
                    <dd className="text-sm text-leaf-muted">
                      {product.crops.join(', ')}
                    </dd>
                  </div>
                  <div className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr] sm:gap-4">
                    <dt className="text-sm font-semibold text-leaf-text">
                      Pack Sizes
                    </dt>
                    <dd className="text-sm text-leaf-muted">
                      {product.packSizes.join(', ')}
                    </dd>
                  </div>
                </dl>
                {product.isDemo && (
                  <p className="mt-3 text-xs text-leaf-muted">
                    Prototype data; verify before publication or use.
                  </p>
                )}
              </section>
            </Reveal>
          </div>
        </Container>
      </section>

      {relatedProducts.length > 0 && (
        <section className="section bg-leaf-background">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Explore more"
                title="Related Products"
                description="Other catalogue entries with a shared category or target crop."
              />
            </Reveal>
            <div className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-leaf-border bg-leaf-soft py-12 sm:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-leaf-forest">
                Leaflife Crop Science
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl">
                Need help choosing a solution?
              </h2>
              <p className="mt-3 text-sm">
                Get in touch with the Leaflife team to learn more.
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
                View All Products
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ProductDetails
