import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import RouteMetadata from '../components/RouteMetadata.jsx'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <RouteMetadata />
      <Navbar />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
