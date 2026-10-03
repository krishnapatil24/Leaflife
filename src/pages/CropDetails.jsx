import { useParams } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import ProductImage from '../components/ProductImage.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { crops } from '../data/index.js'

function CropDetails() {
  const { cropId } = useParams()
  const crop = crops.find((item) => item.id === cropId)

  if (!crop) {
    return (
      <section className="grid min-h-[55vh] place-items-center px-4 py-16 text-center">
        <div>
          <h1 className="text-3xl sm:text-4xl">Crop Not Found</h1>
          <p className="mt-3">This crop could not be found.</p>
          <Button href="/crops" variant="secondary" className="mt-7">
            Back to Crops
          </Button>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="bg-leaf-earth py-10 sm:py-14">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <ProductImage
                src={crop.image}
                alt={`${crop.name} demo crop`}
                className="aspect-[4/3] w-full border border-leaf-border"
              />
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-leaf-forest">
                Crop resource · Demo
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl">{crop.name}</h1>
              <p className="mt-4 text-base sm:text-lg">{crop.description}</p>
              <p className="mt-3 text-xs text-leaf-muted">
                Prototype information only — not agronomic guidance.
              </p>
              <Button href="/crops" variant="secondary" className="mt-6">
                Back to Crops
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section bg-leaf-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Crop stages"
                title="Stages in this demo entry"
                description="Illustrative labels from the local crop dataset."
              />
              <ol className="mt-5 space-y-3">
                {crop.stages.map((stage, index) => (
                  <li
                    key={`${stage}-${index}`}
                    className="flex gap-3 border-b border-leaf-border py-3 text-sm"
                  >
                    <span className="font-semibold text-leaf-forest">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{stage}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading
                eyebrow="Challenges"
                title="Prototype considerations"
                description="These are placeholders, not crop diagnoses or treatment recommendations."
              />
              <ul className="mt-5 space-y-3">
                {crop.challenges.map((challenge, index) => (
                  <li
                    key={`${challenge}-${index}`}
                    className="border border-leaf-border bg-leaf-background p-4 text-sm"
                  >
                    {challenge}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}

export default CropDetails
