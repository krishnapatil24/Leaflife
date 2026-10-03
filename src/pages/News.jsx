import { useMemo, useState } from 'react'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import NewsCard from '../components/NewsCard.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { news } from '../data/index.js'

function News() {
  const [category, setCategory] = useState('')
  const sortedNews = useMemo(
    () => [...news].sort((first, second) => second.date.localeCompare(first.date)),
    [],
  )
  const categories = useMemo(
    () => [...new Set(news.map((article) => article.category))].sort(),
    [],
  )
  const featuredArticle = sortedNews[0]
  const filteredArticles = sortedNews.filter(
    (article) =>
      article.id !== featuredArticle?.id &&
      (!category || article.category === category),
  )
  const showFeatured = !category || featuredArticle?.category === category

  return (
    <>
      <section className="border-b border-leaf-border bg-leaf-earth py-14 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-leaf-forest">
              News & Updates
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
              Notes from agriculture and the prototype
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg">
              Browse sample articles prepared for the Leaflife Crop Science
              website prototype.
            </p>
            <p className="mt-3 text-xs font-semibold text-leaf-muted">
              Prototype content — these are not verified company announcements.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section bg-leaf-background">
        <Container>
          {showFeatured && featuredArticle && (
            <Reveal>
              <section aria-labelledby="featured-article-heading">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <SectionHeading
                    eyebrow="Featured article"
                    title="From the prototype newsroom"
                  />
                  <span className="rounded-full bg-leaf-soft px-3 py-1.5 text-xs font-semibold text-leaf-primary">
                    Sample article
                  </span>
                </div>
                <div className="grid overflow-hidden border border-leaf-border bg-leaf-white md:grid-cols-2">
                  <div className="min-h-56 md:min-h-80">
                    <NewsCardVisual article={featuredArticle} />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-wide text-leaf-forest">
                      {featuredArticle.category}
                    </p>
                    <time
                      className="mt-2 text-sm"
                      dateTime={featuredArticle.date}
                    >
                      {featuredArticle.date}
                    </time>
                    <h2
                      id="featured-article-heading"
                      className="mt-4 text-2xl sm:text-3xl"
                    >
                      {featuredArticle.title}
                    </h2>
                    <p className="mt-3 text-sm">{featuredArticle.excerpt}</p>
                    <p className="mt-3 text-xs font-medium text-leaf-muted">
                      Prototype content — not a verified announcement.
                    </p>
                    <Button
                      href={`/news/${featuredArticle.id}`}
                      variant="ghost"
                      className="mt-5 self-start"
                    >
                      Read Featured Article
                    </Button>
                  </div>
                </div>
              </section>
            </Reveal>
          )}

          <div className="mt-14 flex flex-col gap-4 border-b border-leaf-border pb-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Latest news"
              title="Latest updates"
              description="All entries are prototype examples and should be replaced with verified editorial content."
            />
            <div className="w-full sm:max-w-xs">
              <label
                htmlFor="news-category"
                className="mb-2 block text-sm font-semibold text-leaf-text"
              >
                Filter by category
              </label>
              <select
                id="news-category"
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
          </div>

          <p aria-live="polite" className="mt-5 text-sm">
            Showing {filteredArticles.length + (showFeatured && featuredArticle ? 1 : 0)}{' '}
            {filteredArticles.length + (showFeatured && featuredArticle ? 1 : 0) === 1
              ? 'article'
              : 'articles'}
          </p>
          {filteredArticles.length || showFeatured ? (
            <div className="mt-5 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article, index) => (
                <Reveal key={article.id} delay={index * 0.035}>
                  <NewsCard article={article} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-5 border border-dashed border-leaf-border bg-white px-5 py-12 text-center">
              <h2 className="text-xl">No articles found</h2>
              <p className="mt-2 text-sm">Try another category.</p>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setCategory('')}
                className="mt-5"
              >
                Clear Filter
              </Button>
            </div>
          )}
        </Container>
      </section>

      <section className="border-t border-leaf-border bg-leaf-soft py-12 sm:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl">Want to get in touch?</h2>
              <p className="mt-2 text-sm">
                Reach out with questions or enquiries.
              </p>
            </div>
            <Button href="/contact">Contact Us</Button>
          </div>
        </Container>
      </section>
    </>
  )
}

function NewsCardVisual({ article }) {
  return (
    <div
      role="img"
      aria-label={`${article.title} demo article visual placeholder`}
      className="flex size-full min-h-56 items-center justify-center bg-leaf-earth p-6"
    >
      <span className="border border-leaf-primary/20 bg-white/80 px-4 py-2 text-xs font-medium text-leaf-primary">
        Illustrative placeholder
      </span>
    </div>
  )
}

export default News
