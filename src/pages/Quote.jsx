import { useState } from "react";
import "./Quote.css";
import { saveFormData } from "../services/firestoreService";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    location: "",
    area: "",
    timeline: "",
    budget: "",
    description: "",
    requirements: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        requirements: checked
          ? [...prev.requirements, value]
          : prev.requirements.filter((req) => req !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await saveFormData(formData);
    if (result.success) {
      alert("Form submitted successfully ✅");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        location: "",
        area: "",
        timeline: "",
        budget: "",
        description: "",
        requirements: [],
      });
    } else {
      alert("Error: " + result.error.message);
    }
  };


  return (
    <div className="quote-page">
      <div className="container">
        {/* Hero Section */}
        <section className="quote-hero">
          <h1>Get Your Custom Quote</h1>
          <p className="hero-subtitle">
            Tell us about your project and we'll provide you with a detailed,
            competitive quote tailored to your needs.
          </p>
        </section>

        <div className="quote-content">
          {/* Quote Form */}
          <div className="quote-form-section">
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-section">
                <h3>Contact Information</h3>
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
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
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
              </div>

              <div className="form-section">
                <h3>Project Details</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="warehouse">Warehouse</option>
                      <option value="factory">Factory Building</option>
                      <option value="office">Office Building</option>
                      <option value="retail">Retail Space</option>
                      <option value="industrial">Industrial Facility</option>
                      <option value="residential">Residential Complex</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Project Location *</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, State"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="area">Approximate Area (sq ft) *</label>
                    <input
                      type="number"
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="e.g., 10000"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="timeline">Project Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-2 months)</option>
                      <option value="short">Short term (3-6 months)</option>
                      <option value="medium">Medium term (6-12 months)</option>
                      <option value="long">Long term (12+ months)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="500k-1m">$500,000 - $1,000,000</option>
                    <option value="over-1m">Over $1,000,000</option>
                  </select>
                </div>
              </div>

              <div className="form-section">
                <h3>Project Requirements</h3>
                <div className="requirements-grid">
                  {[
                    "Insulation Requirements",
                    "HVAC Systems",
                    "Electrical Installation",
                    "Plumbing Systems",
                    "Fire Safety Systems",
                    "Security Systems",
                    "Loading Docks",
                    "Office Spaces",
                    "Parking Areas",
                    "Landscaping",
                  ].map((requirement) => (
                    <label key={requirement} className="checkbox-label">
                      <input
                        type="checkbox"
                        value={requirement}
                        checked={formData.requirements.includes(requirement)}
                        onChange={handleChange}
                      />
                      <span className="checkmark"></span>
                      {requirement}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-section">
                <h3>Additional Information</h3>
                <div className="form-group">
                  <label htmlFor="description">Project Description *</label>
                  <textarea
                    id="description"
                    name="description"
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Please provide detailed information about your project, specific requirements, challenges, or any other relevant details..."
                    required
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Request Quote
              </button>
            </form>
          </div>

          {/* Quote Info Sidebar */}
          <div className="quote-info-section">
            <div className="info-card">
              <h3>What Happens Next?</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Review</h4>
                    <p>Our team reviews your requirements within 24 hours</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Consultation</h4>
                    <p>We schedule a consultation to discuss your project</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Quote</h4>
                    <p>Receive a detailed, customized quote for your project</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3>Why Choose Duracore?</h3>
              <ul className="benefits-list">
                <li>✓ 25+ years of industry experience</li>
                <li>✓ Competitive pricing with no hidden costs</li>
                <li>✓ Quality materials and construction</li>
                <li>✓ On-time project delivery</li>
                <li>✓ Comprehensive warranty coverage</li>
                <li>✓ Expert engineering and design</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Need Help?</h3>
              <p>
                Have questions about your project? Our experts are here to help.
              </p>
              <div className="contact-options">
                <a href="7217044347" className="contact-btn">
                  <i className="fas fa-phone"></i>
                  Call Us
                </a>
                <a href="mailto:sales@duracore.in" className="contact-btn">
                  <i className="fas fa-envelope"></i>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
