import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Professional Construction Solutions</h1>
            <p className="hero-description">
              Leading provider of pre-engineered buildings and modular construction solutions. 
              Quality engineering, timely delivery, and exceptional service for your projects.
            </p>
            
            <div className="hero-cta">
              <a href="/quote" className="btn btn-primary">Get Quote</a>
              <a href="/services" className="btn btn-secondary">Our Services</a>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">ISO</div>
              <div className="stat-label">Certified Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
