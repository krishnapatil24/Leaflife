import { ArrowUpRight } from 'lucide-react'
import Button from './Button.jsx'
import VisualPlaceholder from './VisualPlaceholder.jsx'

function CropCard({ crop }) {
  return (
    <article className="card flex h-full flex-col overflow-hidden p-0">
      <VisualPlaceholder
        className="min-h-36"
        label={`${crop.name} demo crop visual placeholder`}
      />
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg">{crop.name}</h3>
          <span className="text-xs font-medium text-leaf-muted">Demo</span>
        </div>
        <p className="mt-2 flex-1 text-sm">{crop.description}</p>
        <Button href={`/crops/${crop.id}`} variant="ghost" className="mt-3 self-start">
          Explore <ArrowUpRight aria-hidden="true" size={16} />
        </Button>
      </div>
    </article>
  )
}

export default CropCard
