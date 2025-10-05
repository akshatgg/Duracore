import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section company-section">
            <div className="footer-brand">
              <h2>Duracore</h2>
              <p className="brand-tagline">Building Excellence</p>
            </div>
            <p className="company-description">
              Leading provider of pre-engineered buildings and modular construction solutions. 
              Delivering quality, innovation, and reliability for your construction projects.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/projects">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="/pre-engineered-buildings">Pre Engineered Buildings</a></li>
              <li><a href="/modular-structures">Modular Structures</a></li>
              <li><a href="/construction-panels">Construction Panels</a></li>
              <li><a href="/epc-solutions">EPC Solutions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <span>123 Industrial District</span>
                  <span>Mumbai, Maharashtra 400001</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <span>+1-800-DURACORE</span>
                  <span>+91-22-1234-5678</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <span>info@duracore.com</span>
                  <span>sales@duracore.com</span>
                </div>
              </div>
            </div>
            <Link to="/quote" className="footer-cta-btn">
              <span>Get Quote</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 Duracore. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
