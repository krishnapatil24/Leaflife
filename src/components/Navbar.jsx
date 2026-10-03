import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import leaflifeLogo from '../assets/logos/leaflife-logo.png'
import Container from './Container.jsx'

const navigation = [
  { label: 'Home', to: '/', end: true },
  { label: 'Products', to: '/products' },
  { label: 'Crops', to: '/crops' },
  { label: 'About', to: '/about' },
  { label: 'Locations', to: '/locations' },
  { label: 'Offers', to: '/offers' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)

  function closeMobileMenu() {
    setMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  useEffect(() => {
    if (!menuOpen) return undefined

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  function renderLinks(mobile = false) {
    return navigation.map(({ label, to, end }) => (
      <NavLink
        key={to}
        to={to}
        end={end}
        onClick={mobile ? closeMobileMenu : undefined}
        className={({ isActive }) =>
          `rounded px-1 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-leaf-primary ${
            isActive
              ? 'font-semibold text-leaf-primary underline decoration-2 underline-offset-8'
              : 'text-leaf-muted hover:text-leaf-primary'
          }`
        }
      >
        {label}
      </NavLink>
    ))
  }

  return (
    <header className="sticky top-0 z-50 border-b border-leaf-border bg-leaf-white">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-6">
          <Link
            to="/"
            className="shrink-0 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-leaf-primary"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={leaflifeLogo}
              alt="Leaflife Crop Science logo"
              className="h-10 w-auto max-w-[11rem] object-contain sm:h-11 sm:max-w-[13rem]"
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
            {renderLinks()}
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg text-leaf-primary transition-colors hover:bg-leaf-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-primary lg:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="size-6"
            >
              {menuOpen ? (
                <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
          inert={!menuOpen}
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-in-out motion-reduce:transition-none lg:hidden ${
            menuOpen ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="flex min-h-0 flex-col border-t border-leaf-border pt-2">
            {renderLinks(true)}
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
