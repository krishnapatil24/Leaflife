import { Leaf } from 'lucide-react'

function VisualPlaceholder({ className = '', label = 'Illustrative visual' }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative isolate flex min-h-48 items-center justify-center overflow-hidden bg-leaf-earth ${className}`.trim()}
    >
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-16 size-56 rounded-full border border-leaf-primary/15"
      />
      <div
        aria-hidden="true"
        className="absolute -right-2 -top-8 size-40 rounded-full border border-leaf-primary/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-leaf-primary/10 to-transparent"
      />
      <Leaf
        aria-hidden="true"
        className="relative size-16 text-leaf-forest/70 sm:size-20"
        strokeWidth={1.1}
      />
      <span className="absolute bottom-3 left-3 rounded bg-white/85 px-2.5 py-1 text-xs font-medium text-leaf-muted">
        Illustrative placeholder
      </span>
    </div>
  )
}

export default VisualPlaceholder
