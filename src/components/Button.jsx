import { Link } from 'react-router-dom'

const variantClasses = {
  primary: 'button-primary',
  secondary: 'button-secondary',
  outline:
    'border border-leaf-primary bg-transparent text-leaf-primary hover:bg-leaf-soft',
  ghost: 'button-text',
}

function Button({
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  variant = 'primary',
  className = '',
}) {
  const classes = `button ${variantClasses[variant] ?? variantClasses.primary} ${className}`.trim()

  if (href) {
    const isExternal = /^(https?:)?\/\//i.test(href)
    const LinkComponent = isExternal ? 'a' : Link
    const linkProps = isExternal ? { href } : { to: href }

    return (
      <LinkComponent
        {...linkProps}
        className={classes}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </LinkComponent>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
