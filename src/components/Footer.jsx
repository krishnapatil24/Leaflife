import { NavLink } from 'react-router-dom'
import Container from './Container.jsx'

const currentYear = new Date().getFullYear()

const linkGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Products', to: '/products' },
      { label: 'Crops', to: '/crops' },
      { label: 'Locations', to: '/locations' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Farmer Stories', to: '/farmer-stories' },
      { label: 'News', to: '/news' },
      { label: 'Offers', to: '/offers' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', to: '/contact' },
    ],
  },
]

function Footer() {
  return (
    <footer className="border-t border-leaf-border bg-leaf-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
          <div>
            <p className="text-lg font-semibold tracking-tight text-leaf-primary">
              Leaflife Crop Science
            </p>
            <p className="mt-3 max-w-xs text-sm">
              Company location and contact details will be added when verified
              information is available.
            </p>
          </div>

          {linkGroups.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h2 className="text-sm font-semibold tracking-normal">{title}</h2>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className="text-sm text-leaf-muted transition-colors hover:text-leaf-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-primary"
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-leaf-border py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {currentYear} Leaflife Crop Science. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="text-leaf-muted">
              Social links will be added when company profiles are confirmed.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
