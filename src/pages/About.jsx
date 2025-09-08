import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>About Duracore</h1>
          <p className="hero-subtitle">
            Building the future with innovative construction solutions and unmatched expertise
          </p>
        </section>

        {/* Company Overview */}
        <section className="company-overview">
          <div className="overview-grid">
            <div className="overview-content">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to revolutionize the construction industry, Duracore has been at the forefront 
                of pre-engineered and prefabricated building solutions for over two decades. We combine cutting-edge 
                technology with traditional craftsmanship to deliver structures that stand the test of time.
              </p>
              <p>
                Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for 
                businesses across various industries. From small-scale projects to large industrial complexes, 
                we bring the same level of dedication and expertise to every endeavor.
              </p>
            </div>
            <div className="overview-stats">
              <div className="stat-item">
                <h3>25+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat-item">
                <h3>1000+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Quality Checkpoints</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="mv-grid">
            <div className="mission">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide innovative, sustainable, and cost-effective construction solutions that exceed 
                client expectations while contributing to the advancement of the construction industry.
              </p>
            </div>
            <div className="vision">
              <div className="mv-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading provider of prefabricated construction solutions globally, setting new 
                standards for quality, efficiency, and environmental responsibility.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="core-values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h4>Quality Excellence</h4>
              <p>We maintain the highest standards in every aspect of our work, from design to delivery.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Customer Focus</h4>
              <p>Our clients' success is our success. We build lasting relationships through exceptional service.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h4>Sustainability</h4>
              <p>We're committed to environmentally responsible practices and sustainable construction methods.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h4>Innovation</h4>
              <p>We continuously invest in new technologies and methods to improve our solutions.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us">
          <h2>Why Choose Duracore?</h2>
          <div className="features-grid">
            <div className="feature">
              <h4>Advanced Manufacturing</h4>
              <p>State-of-the-art facilities with automated processes and rigorous quality control.</p>
            </div>
            <div className="feature">
              <h4>Expert Team</h4>
              <p>Experienced engineers, architects, and construction professionals dedicated to excellence.</p>
            </div>
            <div className="feature">
              <h4>Timely Delivery</h4>
              <p>Proven track record of completing projects on time and within budget.</p>
            </div>
            <div className="feature">
              <h4>Comprehensive Support</h4>
              <p>From initial consultation to post-installation support, we're with you every step.</p>
            </div>
            <div className="feature">
              <h4>Custom Solutions</h4>
              <p>Tailored designs and solutions to meet your specific requirements and challenges.</p>
            </div>
            <div className="feature">
              <h4>Nationwide Reach</h4>
              <p>Extensive network covering urban centers and remote locations across the country.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h3>Ready to Build Your Future?</h3>
          <p>Let's discuss how Duracore can bring your construction vision to life.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Get In Touch</a>
            <a href="/quote" className="btn btn-secondary">Request Quote</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
