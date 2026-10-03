import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import VisualPlaceholder from './VisualPlaceholder.jsx'

function OfferCard({ offer }) {
  const [expanded, setExpanded] = useState(false)
  const detailsId = useId()

  return (
    <article className="flex h-full flex-col border border-leaf-border bg-leaf-white">
      <VisualPlaceholder
        className="aspect-[16/9] min-h-0"
        label={`${offer.title} demo offer visual placeholder`}
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-leaf-soft px-3 py-1 text-xs font-semibold text-leaf-forest">
            {offer.category}
          </span>
          {offer.isDemo && (
            <span className="text-xs font-semibold text-leaf-muted">
              Prototype
            </span>
          )}
        </div>
        <h2 className="mt-4 text-xl">{offer.title}</h2>
        <p className="mt-2 text-sm">{offer.description}</p>
        <div className="mt-4 border-t border-leaf-border pt-3 text-sm">
          <span className="font-medium text-leaf-text">Validity: </span>
          <span>{offer.validUntil}</span>
        </div>
        {expanded && (
          <div
            id={detailsId}
            className="mt-4 border-l-2 border-leaf-primary/40 bg-leaf-background p-4"
          >
            <p className="text-sm font-semibold text-leaf-text">
              Prototype offer information
            </p>
            <p className="mt-2 text-sm">
              {offer.description} Category: {offer.category}. Validity:{' '}
              {offer.validUntil}
            </p>
            {offer.isDemo && (
              <p className="mt-2 text-xs font-medium text-leaf-muted">
                This is sample content, not a current promotion, price, or
                campaign.
              </p>
            )}
          </div>
        )}
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((value) => !value)}
          className="mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded px-1 pt-5 text-sm font-semibold text-leaf-primary transition-colors hover:text-leaf-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-primary"
        >
          {expanded ? 'Hide Details' : 'View Details'}
          <ChevronDown
            aria-hidden="true"
            className={`size-4 transition-transform motion-reduce:transition-none ${
              expanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>
    </article>
  )
}

export default OfferCard
