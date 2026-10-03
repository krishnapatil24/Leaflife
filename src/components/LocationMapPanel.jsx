import { MapPinned } from 'lucide-react'

function LocationMapPanel({ locations }) {
  const mappableLocations = locations.filter(
    ({ coordinates }) =>
      Number.isFinite(coordinates?.lat) &&
      Number.isFinite(coordinates?.lng) &&
      (coordinates.lat !== 0 || coordinates.lng !== 0),
  )

  return (
    <section
      aria-label="Location map"
      className="flex min-h-72 flex-col border border-leaf-border bg-leaf-earth p-5 sm:min-h-96 sm:p-7"
    >
      <div className="flex items-center gap-3">
        <MapPinned aria-hidden="true" className="size-5 text-leaf-primary" />
        <h2 className="text-lg">Location map</h2>
      </div>
      {mappableLocations.length === 0 ? (
        <div className="my-auto mx-auto max-w-sm py-10 text-center">
          <div className="mx-auto grid size-12 place-items-center rounded-full border border-leaf-primary/20 bg-white/70 text-leaf-primary">
            <MapPinned aria-hidden="true" className="size-5" />
          </div>
          <p className="mt-4 font-medium text-leaf-text">
            Map ready for verified locations
          </p>
          <p className="mt-2 text-sm">
            No verified coordinates are available. No map markers are shown.
          </p>
        </div>
      ) : (
        <ul className="mt-5 space-y-3">
          {mappableLocations.map((location) => (
            <li
              key={location.id}
              className="border border-leaf-border bg-white/80 p-3 text-sm"
            >
              <p className="font-semibold text-leaf-text">{location.name}</p>
              <p>
                {location.city} · <span className="capitalize">{location.type}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default LocationMapPanel
