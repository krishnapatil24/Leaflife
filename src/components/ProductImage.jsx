import { useState } from 'react'
import VisualPlaceholder from './VisualPlaceholder.jsx'

function ProductImage({ src, alt, className = '' }) {
  const [imageUnavailable, setImageUnavailable] = useState(
    !src || src.endsWith('/placeholder.jpg'),
  )

  if (imageUnavailable) {
    return (
      <VisualPlaceholder
        className={className}
        label={`${alt}. Illustrative placeholder shown.`}
      />
    )
  }

  return (
    <div
      className={`relative overflow-hidden bg-leaf-earth ${className}`.trim()}
    >
      <img
        src={src}
        alt={alt}
        className="size-full object-contain"
        onError={() => setImageUnavailable(true)}
      />
    </div>
  )
}

export default ProductImage
