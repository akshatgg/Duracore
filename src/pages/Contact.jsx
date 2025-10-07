import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
  }

  return (
    <div className="contact-page">
      <div className="container">
        {/* Hero Section */}
        <section className="contact-hero">
          <h1>Contact Duracore</h1>
          <p className="hero-subtitle">
            Ready to start your construction project? Get in touch with our experts today.
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="pre-engineered-buildings">Pre Engineered Buildings</option>
                  <option value="prefabricated-structures">Prefabricated Structures</option>
                  <option value="light-gauge-steel">Light Gauge Steel Framing</option>
                  <option value="sandwich-panels">Sandwich Panels</option>
                  <option value="modular-solutions">Modular Solutions</option>
                  <option value="epc-solutions">EPC Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h2>Get In Touch</h2>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="method-content">
                  <h4>Corporate Office</h4>
                  <p>Opp. KIET College<br />Ghaziabad, Uttar Pradesh 201206</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="method-content">
                  <h4>Phone Numbers</h4>
                  <p>7217044347</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="method-content">
                  <h4>Email Addresses</h4>
                  <p>sales@duracore.in</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="method-content">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="quick-contact">
              <h3>Quick Contact</h3>
              <div className="quick-contact-cards">
                <div className="quick-card">
                  <h4>Sales Inquiry</h4>
                  <p>Get pricing and product information</p>
                  <a href="mailto:sales@duracore.com" className="btn btn-secondary">
                    Email Sales
                  </a>
                </div>
                <div className="quick-card">
                  <h4>Technical Support</h4>
                  <p>Get help with existing projects</p>
                  <a href="mailto:support@duracore.in" className="btn btn-secondary">
                    Get Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="map-section">
          <h2>Find Us</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <i className="fas fa-map-marked-alt"></i>
              <p>Interactive Map Coming Soon</p>
              <p className="map-address">Opp. KIET College Ghaziabad, Uttar Pradesh 201206</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
