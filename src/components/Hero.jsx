import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Image Container */}
      <div className="hero-image-container">
        <img src="https://www.panjetanibuildwell.com/assets/img/puf1.jpg" alt="Duracore - Pre Engineered Buildings" />
      </div>

      {/* Content Container (separate) */}
      <div className="hero-content-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Duracore - Professional Pre-Engineered Building Solutions</h1>
            <p className="hero-description">
              Duracore is a leading provider of pre-engineered buildings and modular construction solutions.
              Quality engineering, timely delivery, and exceptional service for your projects. Trust Duracore for all your PEB needs.
            </p>
            
            <div className="hero-cta">
              <a href="/quote" className="btn btn-primary">Get Quote</a>
              <a href="/services" className="btn btn-secondary">Our Services</a>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">250+</div>
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
