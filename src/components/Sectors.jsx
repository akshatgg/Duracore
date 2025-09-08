import './Sectors.css'

const Sectors = () => {
  const sectors = [
    {
      title: "Industrial Buildings Construction",
      description: "We specialize in all types of industrial buildings, from warehouses to factory sheds. With 25+ years of experience and technical expertise, we deliver solutions tailored to meet your specific needs.",
      icon: "🏭",
      features: ["Manufacturing Plants", "Processing Facilities", "Distribution Centers", "Quality Control Labs"],
      link: "/sectors/industrial"
    },
    {
      title: "Construction Sector",
      description: "We offer a wide range of products tailored to the construction sector, with collaborations with leading names in the industry.",
      icon: "🏗️",
      features: ["Residential Projects", "Commercial Buildings", "Mixed-Use Developments", "Infrastructure Support"],
      link: "/sectors/construction"
    },
    {
      title: "Institutional Sector", 
      description: "We specialize in large institutional buildings like schools, hospitals, and offices. Prefabrication is increasingly recognized as a valuable alternative to traditional construction methods.",
      icon: "🏫",
      features: ["Educational Facilities", "Healthcare Centers", "Government Buildings", "Research Institutes"],
      link: "/sectors/institutional"
    },
    {
      title: "Infrastructure Sector",
      description: "Duracore offers durable, custom-designed Pre-Engineered Buildings to protect and enhance your organization. We design, manufacture, and build PEBs that support your business growth.",
      icon: "🌉",
      features: ["Transportation Hubs", "Utility Buildings", "Communication Centers", "Emergency Facilities"],
      link: "/sectors/infrastructure"
    },
    {
      title: "Sports & Leisure",
      description: "We specialize in prefabricated stadiums and indoor sports facilities, offering cost-effective and durable solutions that can be built quickly.",
      icon: "🏟️",
      features: ["Sports Complexes", "Recreation Centers", "Event Venues", "Fitness Facilities"],
      link: "/sectors/sports"
    },
    {
      title: "Special Buildings",
      description: "We specialize in lightweight, cost-effective modular structures that are easy to install. Our special buildings include modular homes, shelters, and specialized facilities.",
      icon: "🏠",
      features: ["Modular Homes", "Emergency Shelters", "Testing Laboratories", "Specialized Facilities"],
      link: "/sectors/special"
    }
  ]

  return (
    <section className="sectors">
      <div className="container">
        <div className="section-header">
          <h2>Diverse Sectors We Cater To</h2>
          <p>Our comprehensive range of construction solutions serves various industries with specialized expertise and innovative approaches.</p>
        </div>

        <div className="sectors-grid">
          {sectors.map((sector, index) => (
            <div key={index} className="sector-card">
              <div className="sector-header">
                <div className="sector-icon">
                  <span>{sector.icon}</span>
                </div>
                <h3>{sector.title}</h3>
              </div>
              
              <div className="sector-content">
                <p>{sector.description}</p>
                
                <div className="sector-features">
                  <h4>Key Applications:</h4>
                  <ul>
                    {sector.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <a href={sector.link} className="sector-link">
                  Discover More <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="sectors-cta">
          <div className="cta-content">
            <h3>Tailored Solutions for Unique Needs</h3>
            <p>Every project is different. Our expert team works closely with you to understand your specific requirements and deliver customized solutions that exceed expectations.</p>
            <div className="cta-stats">
              <div className="stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Industry Sectors</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Custom Solutions</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
            </div>
            <a href="/contact" className="btn btn-primary">Get A Quote</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sectors
