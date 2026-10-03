import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import VisualPlaceholder from './VisualPlaceholder.jsx'

function NewsCard({ article }) {
  return (
    <article className="card flex h-full flex-col overflow-hidden p-0">
      <VisualPlaceholder
        className="min-h-40"
        label="Demo news article visual placeholder"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-semibold uppercase tracking-wide text-leaf-forest">
            {article.category}
          </span>
          <time dateTime={article.date}>{article.date}</time>
        </div>
        <span className="mt-3 self-start rounded-full bg-leaf-soft px-2.5 py-1 text-xs font-medium text-leaf-primary">
          Prototype content
        </span>
        <h3 className="mt-3 text-lg">{article.title}</h3>
        <p className="mt-2 flex-1 text-sm">{article.excerpt}</p>
        <Link
          to={`/news/${article.id}`}
          className="mt-4 inline-flex min-h-11 items-center gap-2 self-start rounded px-1 text-sm font-semibold text-leaf-primary transition-colors hover:text-leaf-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-primary"
        >
          Read More about {article.title}{' '}
          <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  )
}

export default NewsCard
