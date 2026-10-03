import { ChevronRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import NewsCard from '../components/NewsCard.jsx'
import ProductImage from '../components/ProductImage.jsx'
import Reveal from '../components/Reveal.jsx'
import { news } from '../data/index.js'

function NewsDetails() {
  const { newsId } = useParams()
  const article = news.find((item) => item.id === newsId)
  const relatedArticles = article
    ? news
        .filter((item) => item.id !== article.id && item.category === article.category)
        .slice(0, 3)
    : []

  if (!article) {
    return (
      <section className="grid min-h-[55vh] place-items-center px-4 py-16 text-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-leaf-forest">
            News & Updates
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl">Article Not Found</h1>
          <p className="mt-3">This article could not be found.</p>
          <Button href="/news" variant="secondary" className="mt-7">
            Back to News
          </Button>
        </div>
      </section>
    )
  }

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
                  to="/news"
                  className="rounded text-leaf-muted hover:text-leaf-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-primary"
                >
                  News
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-4 text-leaf-muted" />
              </li>
              <li aria-current="page" className="font-medium text-leaf-text">
                {article.title}
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      <article>
        <header className="bg-leaf-earth py-12 sm:py-16">
          <Container>
            <Reveal className="mx-auto max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-leaf-soft px-3 py-1.5 text-xs font-semibold text-leaf-forest">
                  {article.category}
                </span>
                <time dateTime={article.date}>{article.date}</time>
                {article.isDemo && (
                  <span className="text-xs font-semibold text-leaf-muted">
                    Prototype article
                  </span>
                )}
              </div>
              <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-5 text-lg">{article.excerpt}</p>
              {article.isDemo && (
                <p className="mt-3 text-xs font-medium text-leaf-muted">
                  Sample content only — not a verified company announcement.
                </p>
              )}
            </Reveal>
          </Container>
        </header>

        <Container>
          <Reveal className="mx-auto -mt-3 max-w-4xl">
            <ProductImage
              src={article.image}
              alt={`${article.title} article visual`}
              className="aspect-[16/8] w-full border border-leaf-border"
            />
          </Reveal>
          <div className="mx-auto max-w-3xl py-10 sm:py-14">
            <p className="whitespace-pre-line text-base leading-8 text-leaf-muted">
              {article.content}
            </p>
            {article.isDemo && (
              <p className="mt-6 border-l-2 border-leaf-primary/40 bg-leaf-background px-4 py-3 text-sm">
                Prototype content — replace with verified editorial material
                before publication.
              </p>
            )}
            <Button href="/news" variant="secondary" className="mt-8">
              Back to News
            </Button>
          </div>
        </Container>
      </article>

      {relatedArticles.length > 0 && (
        <section className="section bg-leaf-background">
          <Container>
            <h2 className="text-2xl sm:text-3xl">Related articles</h2>
            <div className="mt-6 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <NewsCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-leaf-border bg-leaf-soft py-12 sm:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl">
                Want to learn more?
              </h2>
              <p className="mt-2 text-sm">
                Browse more prototype updates or get in touch.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href="/news" variant="secondary" className="w-full sm:w-auto">
                Back to News
              </Button>
              <Button href="/contact" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default NewsDetails
