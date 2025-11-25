import Hero from '../components/Hero'
import Products from '../components/Products'
import SEO from '../components/SEO'

const Home = () => {
  return (
    <div>
      <SEO
        title="Home"
        description="Duracore is India's leading manufacturer of pre-engineered buildings (PEB), prefabricated structures, and modular construction solutions. 250+ successful projects delivered with superior quality and timely execution."
        keywords="pre engineered buildings India, PEB manufacturer, prefabricated structures, steel buildings, modular construction, warehouse construction, industrial buildings, factory construction"
        canonical="/"
      />
      <Hero />
      <Products />
    </div>
  )
}

export default Home
