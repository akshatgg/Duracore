import './Products.css'

const Products = () => {
  const productCategories = [
    {
      title: "Pre Engineered Buildings",
      description: "Steel building solutions for industrial and commercial use",
      products: ["Industrial Warehouses", "Manufacturing Plants", "Cold Storage", "Aircraft Hangars"]
    },
    {
      title: "Modular Structures", 
      description: "Flexible, portable building solutions",
      products: ["Site Offices", "Security Cabins", "Control Rooms", "Clean Rooms"]
    },
    {
      title: "Construction Panels",
      description: "High-performance insulated building panels",
      products: ["PUF Panels", "EPS Panels", "Rockwool Panels", "Sandwich Panels"]
    }
  ]

  return (
    <section className="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Solutions</h2>
          <p>Comprehensive construction solutions for industrial and commercial projects</p>
        </div>

        <div className="products-grid">
          {productCategories.map((category, index) => (
            <div key={index} className="product-category">
              <h3>{category.title}</h3>
              <p className="category-description">{category.description}</p>
              
              <ul className="products-list">
                {category.products.map((product, productIndex) => (
                  <li key={productIndex}>{product}</li>
                ))}
              </ul>
              
              <a href="/services" className="category-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <h3>Custom Solutions Available</h3>
          <p>Get a tailored solution designed for your specific project requirements.</p>
          <a href="/quote" className="btn btn-primary">Request Quote</a>
        </div>
      </div>
    </section>
  )
}

export default Products
