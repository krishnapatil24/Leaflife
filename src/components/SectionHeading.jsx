function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = 'left',
  className = '',
}) {
  const alignmentClass =
    alignment === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-3xl ${alignmentClass} ${className}`.trim()}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-leaf-forest">
          {eyebrow}
        </p>
      )}
      <h2>{title}</h2>
      {description && <p className="mt-4 text-base md:text-lg">{description}</p>}
    </div>
  )
}

export default SectionHeading
