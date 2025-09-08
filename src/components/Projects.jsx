import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "TechCorp Headquarters",
      location: "Mumbai, Maharashtra",
      category: "industrial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      description: "50,000 sq ft modern industrial facility with advanced PEB technology"
    },
    {
      id: 2,
      title: "LogiFlow Warehouse",
      location: "Delhi, NCR",
      category: "warehouse",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
      description: "100,000 sq ft automated warehouse with climate control systems"
    },
    {
      id: 3,
      title: "GreenTech Manufacturing",
      location: "Pune, Maharashtra",
      category: "industrial",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      description: "Eco-friendly manufacturing facility with solar integration"
    },
    {
      id: 4,
      title: "Elite Educational Complex",
      location: "Bangalore, Karnataka",
      category: "institutional",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      description: "Modern educational campus with modular classroom structures"
    },
    {
      id: 5,
      title: "SportZone Arena",
      location: "Chennai, Tamil Nadu",
      category: "sports",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Multi-purpose sports facility with advanced steel framing"
    },
    {
      id: 6,
      title: "MediCare Hospital",
      location: "Hyderabad, Telangana",
      category: "institutional",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
      description: "State-of-the-art healthcare facility with clean room technology"
    },
    {
      id: 7,
      title: "ColdChain Logistics",
      location: "Kolkata, West Bengal",
      category: "warehouse",
      image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&h=400&fit=crop",
      description: "Temperature-controlled storage facility for pharmaceutical products"
    },
    {
      id: 8,
      title: "AutoTech Factory",
      location: "Ahmedabad, Gujarat",
      category: "industrial",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      description: "Automotive manufacturing plant with precision engineering"
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'industrial', label: 'Industrial' },
    { key: 'warehouse', label: 'Warehouse' },
    { key: 'institutional', label: 'Institutional' },
    { key: 'sports', label: 'Sports & Leisure' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Explore Our Latest Projects</h2>
          <p>Discover our portfolio of successful construction projects across various industries and sectors.</p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="view-details">View Details</button>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-location">📍 {project.location}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-category">
                  <span className={`category-tag ${project.category}`}>
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Have a Project in Mind?</h3>
          <p>Let's discuss how we can bring your construction vision to life with our expertise and innovation.</p>
          <div className="cta-buttons">
            <a href="/projects" className="btn btn-primary">View All Projects</a>
            <a href="/contact" className="btn btn-secondary">Start Your Project</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
