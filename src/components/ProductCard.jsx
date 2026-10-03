import { ArrowUpRight } from 'lucide-react'
import Button from './Button.jsx'
import ProductImage from './ProductImage.jsx'

function ProductCard({ product }) {
  return (
    <article className="card flex h-full flex-col overflow-hidden p-0">
      <ProductImage
        src={product.image}
        alt={`${product.name} product`}
        className="aspect-[4/3] min-h-0"
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-leaf-soft px-2.5 py-1 text-xs font-semibold text-leaf-forest">
            {product.category}
          </span>
          {product.isDemo && (
            <span className="rounded-full bg-leaf-soft px-2.5 py-1 text-xs font-medium text-leaf-primary">
              Demo
            </span>
          )}
        </div>
        <h3 className="text-xl">{product.name}</h3>
        <p className="mt-2 text-sm">{product.shortDescription}</p>
        <div className="mt-4">
          <p className="mb-2 text-xs font-medium text-leaf-muted">
            Demo crop associations
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Associated demo crops">
            {product.crops.map((crop) => (
              <li
                key={crop}
                className="rounded border border-leaf-border px-2.5 py-1 text-xs text-leaf-muted"
              >
                {crop}
              </li>
            ))}
          </ul>
        </div>
        <Button
          href={`/products/${product.id}`}
          variant="ghost"
          className="mt-auto self-start pt-5"
        >
          View Details <ArrowUpRight aria-hidden="true" size={16} />
        </Button>
      </div>
    </article>
  )
}

export default ProductCard
