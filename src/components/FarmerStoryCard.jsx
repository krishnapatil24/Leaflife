import { ArrowUpRight } from 'lucide-react'
import Button from './Button.jsx'
import VisualPlaceholder from './VisualPlaceholder.jsx'

function FarmerStoryCard({ story }) {
  return (
    <article className="card flex h-full flex-col overflow-hidden p-0">
      <VisualPlaceholder
        className="min-h-44"
        label="Fictional demo farmer story visual placeholder"
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="mb-3 self-start rounded-full bg-leaf-soft px-2.5 py-1 text-xs font-semibold text-leaf-primary">
          Fictional demo story
        </span>
        <h3 className="text-xl">{story.title}</h3>
        <p className="mt-2 text-sm">
          {story.farmerName} · {story.location} · {story.crop}
        </p>
        <p className="mt-3 flex-1 text-sm">{story.summary}</p>
        <Button href="/farmer-stories" variant="ghost" className="mt-4 self-start">
          Read Story <ArrowUpRight aria-hidden="true" size={16} />
        </Button>
      </div>
    </article>
  )
}

export default FarmerStoryCard
