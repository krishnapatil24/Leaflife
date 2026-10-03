import Button from '../components/Button.jsx'

function NotFound() {
  return (
    <section className="grid min-h-[50vh] place-items-center px-4 py-16 text-center">
      <div>
        <p className="text-4xl font-semibold text-leaf-primary">404</p>
        <h1 className="mt-3">Page Not Found</h1>
        <Button href="/" className="mt-6">
          Back to Home
        </Button>
      </div>
    </section>
  )
}

export default NotFound
