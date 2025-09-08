import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Pre Engineered Buildings",
      description: "Complete steel building solutions designed for maximum efficiency and durability",
      features: ["Custom Design", "Fast Installation", "Cost Effective", "Durable Structure"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      link: "/services/pre-engineered-buildings"
    },
    {
      id: 2,
      title: "Prefabricated Structures",
      description: "Modular building solutions for rapid deployment and maximum flexibility",
      features: ["Quick Assembly", "Portable Design", "Weather Resistant", "Multi-Purpose"],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop",
      link: "/services/prefabricated-structures"
    },
    {
      id: 3,
      title: "Light Gauge Steel Framing",
      description: "Lightweight, high-strength framing systems for modern construction",
      features: ["Lightweight", "High Strength", "Corrosion Resistant", "Precise Engineering"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      link: "/services/light-gauge-steel"
    },
    {
      id: 4,
      title: "Sandwich Panels",
      description: "High-performance insulated panels for superior thermal efficiency",
      features: ["Thermal Insulation", "Fire Resistant", "Easy Installation", "Energy Efficient"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      link: "/services/sandwich-panels"
    },
    {
      id: 5,
      title: "Modular Solutions",
      description: "Ready-to-deploy modular units for immediate installation",
      features: ["Plug & Play", "Scalable Design", "Quick Deployment", "Cost Efficient"],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
      link: "/services/modular-solutions"
    },
    {
      id: 6,
      title: "EPC Solutions",
      description: "Complete Engineering, Procurement, and Construction services",
      features: ["End-to-End Service", "Project Management", "Quality Assurance", "Timely Delivery"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
      link: "/services/epc-solutions"
    }
  ]

  return (
    <div className="services-page">
      <div className="container">
        {/* Hero Section */}
        <section className="services-hero">
          <h1>Our Services</h1>
          <p className="hero-subtitle">
            Comprehensive construction solutions tailored to meet your specific project requirements
          </p>
        </section>

        {/* Services Grid */}
        <section className="services-grid-section">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <a href={service.link} className="view-service-btn">
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-features">
                    {service.features.map((feature, index) => (
                      <span key={index} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a href={service.link} className="service-link">
                    Explore Service →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Consultation</h4>
              <p>We understand your requirements and provide expert consultation</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Design & Planning</h4>
              <p>Our engineers create detailed designs and project plans</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Manufacturing</h4>
              <p>Precision manufacturing with quality control at every step</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Installation</h4>
              <p>Professional installation and project completion</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta">
          <h3>Ready to Get Started?</h3>
          <p>Contact our experts to discuss your project requirements and get a customized solution.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Contact Us</a>
            <a href="/quote" className="btn btn-secondary">Get Quote</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services
