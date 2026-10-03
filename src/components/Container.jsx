function Container({ children, className = '' }) {
  return (
    <div className={`site-container ${className}`.trim()}>
      {children}
    </div>
  )
}

export default Container
