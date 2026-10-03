import { Outlet, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import CropDetails from './pages/CropDetails.jsx'
import Crops from './pages/Crops.jsx'
import FarmerStories from './pages/FarmerStories.jsx'
import Home from './pages/Home.jsx'
import Locations from './pages/Locations.jsx'
import News from './pages/News.jsx'
import NewsDetails from './pages/NewsDetails.jsx'
import NotFound from './pages/NotFound.jsx'
import Offers from './pages/Offers.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Products from './pages/Products.jsx'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Outlet />}>
          <Route index element={<Products />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
        <Route path="crops" element={<Outlet />}>
          <Route index element={<Crops />} />
          <Route path=":cropId" element={<CropDetails />} />
        </Route>
        <Route path="locations" element={<Locations />} />
        <Route path="offers" element={<Offers />} />
        <Route path="farmer-stories" element={<FarmerStories />} />
        <Route path="news" element={<News />} />
        <Route path="news/:newsId" element={<NewsDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
