import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import leaflifeLogo from '../assets/logos/leaflife-logo.png'
import { crops, news, products } from '../data/index.js'

const staticMetadata = {
  '/': {
    title: 'Leaflife Crop Science | Agricultural Solutions',
    description:
      'Explore the Leaflife Crop Science website prototype, including demo product and crop information.',
  },
  '/about': {
    title: 'About Leaflife Crop Science',
    description:
      'Learn about the Leaflife Crop Science website prototype and its placeholder company information.',
  },
  '/products': {
    title: 'Products | Leaflife Crop Science',
    description:
      'Browse the local Leaflife Crop Science product catalogue prototype.',
  },
  '/crops': {
    title: 'Crop Solutions | Leaflife Crop Science',
    description:
      'Explore demo crop resources in the Leaflife Crop Science website prototype.',
  },
  '/locations': {
    title: 'Locations | Leaflife Crop Science',
    description:
      'Explore the prototype Leaflife Crop Science location directory. Listing information requires verification.',
  },
  '/offers': {
    title: 'Offers & Updates | Leaflife Crop Science',
    description:
      'Browse prototype offers and updates. This sample content is not a current promotion.',
  },
  '/farmer-stories': {
    title: 'Farmer Stories | Leaflife Crop Science',
    description:
      'Read fictional sample stories created for the Leaflife Crop Science website prototype.',
  },
  '/news': {
    title: 'News & Updates | Leaflife Crop Science',
    description:
      'Browse prototype news and sample articles for the Leaflife Crop Science website.',
  },
  '/contact': {
    title: 'Contact Leaflife Crop Science',
    description:
      'Contact page prototype for Leaflife Crop Science. Verified contact information is to be updated.',
  },
}

function getMetadata(pathname) {
  if (staticMetadata[pathname]) return staticMetadata[pathname]

  const productMatch = pathname.match(/^\/products\/([^/]+)\/?$/)
  if (productMatch) {
    const product = products.find((item) => item.id === productMatch[1])
    return {
      title: product
        ? `${product.name} | Leaflife Crop Science`
        : 'Product Not Found | Leaflife Crop Science',
      description: product
        ? `${product.name} product information from the Leaflife Crop Science demo catalogue. Verify all details before use.`
        : 'The requested product was not found in the local demo catalogue.',
    }
  }

  const cropMatch = pathname.match(/^\/crops\/([^/]+)\/?$/)
  if (cropMatch) {
    const crop = crops.find((item) => item.id === cropMatch[1])
    return {
      title: crop
        ? `${crop.name} | Leaflife Crop Science`
        : 'Crop Not Found | Leaflife Crop Science',
      description: crop
        ? `${crop.name} crop resource in the Leaflife Crop Science website prototype.`
        : 'The requested crop was not found in the local demo directory.',
    }
  }

  const newsMatch = pathname.match(/^\/news\/([^/]+)\/?$/)
  if (newsMatch) {
    const article = news.find((item) => item.id === newsMatch[1])
    return {
      title: article
        ? `${article.title} | Leaflife Crop Science`
        : 'Article Not Found | Leaflife Crop Science',
      description: article
        ? `${article.excerpt} Prototype article content; not a verified company announcement.`
        : 'The requested article was not found in the local demo news.',
    }
  }

  return {
    title: 'Page Not Found | Leaflife Crop Science',
    description: 'The requested page could not be found.',
  }
}

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.append(element)
  }
  element.setAttribute('content', content)
}

function setLink(rel, href, type) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.append(element)
  }
  if (type) element.setAttribute('type', type)
  element.setAttribute('href', href)
}

function RouteMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = getMetadata(pathname)
    const imageUrl = new URL(leaflifeLogo, window.location.origin).href
    const isArticle = /^\/news\/[^/]+\/?$/.test(pathname)

    document.title = metadata.title
    setLink('icon', imageUrl, 'image/png')
    setMeta('name', 'description', metadata.description)
    setMeta('name', 'theme-color', '#14532d')
    setMeta('property', 'og:title', metadata.title)
    setMeta('property', 'og:description', metadata.description)
    setMeta('property', 'og:type', isArticle ? 'article' : 'website')
    setMeta('property', 'og:url', window.location.href)
    setMeta('property', 'og:image', imageUrl)
    setMeta('property', 'og:image:alt', 'Leaflife Crop Science logo')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', metadata.title)
    setMeta('name', 'twitter:description', metadata.description)
    setMeta('name', 'twitter:image', imageUrl)
  }, [pathname])

  return null
}

export default RouteMetadata
