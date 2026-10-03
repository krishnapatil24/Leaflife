import { Building2, MapPin, Store } from 'lucide-react'

function isUnverified(value) {
  return (
    !value ||
    /^replace with verified/i.test(value) ||
    /^demo\b/i.test(value) ||
    /\(demo/i.test(value)
  )
}

function LocationCard({ location }) {
  const TypeIcon = location.type === 'office' ? Building2 : Store
  const hasVerifiedAddress = !isUnverified(location.address)
  const hasVerifiedPhone = !isUnverified(location.phone)
  const hasVerifiedEmail = !isUnverified(location.email)
  const hasVerifiedPlace =
    !isUnverified(location.city) &&
    !isUnverified(location.state) &&
    !isUnverified(location.country)
  const hasVerifiedInformation =
    hasVerifiedAddress || hasVerifiedPhone || hasVerifiedEmail || hasVerifiedPlace

  return (
    <article className="border border-leaf-border bg-leaf-white p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-leaf-soft text-leaf-primary">
            <TypeIcon aria-hidden="true" className="size-5" />
          </span>
          <div className="min-w-0">
            <h2 className="text-lg">{location.name}</h2>
            <p className="mt-1 text-sm capitalize">
              {location.type} · {location.city}, {location.state}
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-leaf-border px-2.5 py-1 text-xs font-medium capitalize text-leaf-muted">
          {location.type}
        </span>
      </div>

      <p className="mt-5 text-sm text-leaf-text">
        <MapPin aria-hidden="true" className="mr-2 inline size-4 text-leaf-forest" />
        {location.address}
      </p>

      {!hasVerifiedInformation && (
        <p className="mt-4 border-l-2 border-leaf-primary/40 bg-leaf-background px-3 py-2 text-xs font-medium text-leaf-muted">
          Information to be updated — this is a demo location, not a verified
          listing.
        </p>
      )}

      {(hasVerifiedPhone || hasVerifiedEmail) && (
        <dl className="mt-4 space-y-2 border-t border-leaf-border pt-4 text-sm">
          {hasVerifiedPhone && (
            <div className="flex gap-2">
              <dt className="font-medium text-leaf-text">Phone</dt>
              <dd className="text-leaf-muted">{location.phone}</dd>
            </div>
          )}
          {hasVerifiedEmail && (
            <div className="flex min-w-0 flex-wrap gap-2">
              <dt className="font-medium text-leaf-text">Email</dt>
              <dd className="break-all text-leaf-muted">{location.email}</dd>
            </div>
          )}
        </dl>
      )}
      {location.isDemo && hasVerifiedInformation && (
        <p className="mt-4 text-xs text-leaf-muted">
          Demo listing — replace with verified location information.
        </p>
      )}
    </article>
  )
}

export default LocationCard
