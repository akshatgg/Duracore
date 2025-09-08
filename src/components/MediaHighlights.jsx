import './MediaHighlights.css'

const MediaHighlights = () => {
  const mediaNews = [
    {
      id: 1,
      title: "Duracore Opens New Manufacturing Facility in Chennai",
      excerpt: "State-of-the-art facility to boost production capacity by 40% and create 200+ jobs in the region.",
      date: "March 15, 2024",
      category: "Company News",
      link: "/news/chennai-facility-opening"
    },
    {
      id: 2,
      title: "Awarded 'Best Innovation in Construction Technology' at BuildTech 2024",
      excerpt: "Recognition for our advanced modular construction solutions and sustainable building practices.",
      date: "February 28, 2024",
      category: "Awards",
      link: "/news/buildtech-award-2024"
    },
    {
      id: 3,
      title: "Duracore Partners with Green Building Council for Sustainable Construction",
      excerpt: "Strategic partnership to promote eco-friendly construction practices across India.",
      date: "February 10, 2024",
      category: "Partnership",
      link: "/news/green-building-partnership"
    }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Advanced Steel Framing: Revolutionizing Modern Construction",
      excerpt: "Discover how light gauge steel framing is transforming the construction industry with superior strength and efficiency.",
      readTime: "5 min read",
      category: "Technology",
      link: "/blog/steel-framing-revolution"
    },
    {
      id: 2,
      title: "Sustainable Construction: Building for the Future",
      excerpt: "Learn about eco-friendly construction practices and how prefabricated buildings contribute to environmental conservation.",
      readTime: "7 min read",
      category: "Sustainability",
      link: "/blog/sustainable-construction-future"
    },
    {
      id: 3,
      title: "Cost-Effective Modular Solutions for Growing Businesses",
      excerpt: "Explore how modular construction can help businesses scale efficiently while maintaining quality and reducing costs.",
      readTime: "4 min read",
      category: "Business",
      link: "/blog/cost-effective-modular-solutions"
    }
  ]

  return (
    <section className="media-highlights">
      <div className="container">
        <div className="section-header">
          <h2>Media Highlights</h2>
          <a href="/media" className="discover-all">Discover All →</a>
        </div>

        <div className="media-content">
          {/* Company News */}
          <div className="media-section">
            <h3>Latest News</h3>
            <div className="news-grid">
              {mediaNews.map(news => (
                <article key={news.id} className="news-card">
                  <div className="news-category">
                    <span className={`category-badge ${news.category.toLowerCase().replace(' ', '-')}`}>
                      {news.category}
                    </span>
                  </div>
                  <h4>{news.title}</h4>
                  <p>{news.excerpt}</p>
                  <div className="news-meta">
                    <span className="news-date">{news.date}</span>
                    <a href={news.link} className="read-more">Read More →</a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          <div className="media-section">
            <h3>Recent from Our Blog</h3>
            <div className="blog-grid">
              {blogPosts.map(post => (
                <article key={post.id} className="blog-card">
                  <div className="blog-header">
                    <span className={`blog-category ${post.category.toLowerCase()}`}>
                      {post.category}
                    </span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <a href={post.link} className="blog-link">Continue Reading →</a>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay Updated with Duracore</h3>
              <p>Get the latest news, insights, and updates from the construction industry delivered to your inbox.</p>
            </div>
            <div className="newsletter-form">
              <form className="subscribe-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="email-input"
                  required
                />
                <button type="submit" className="subscribe-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MediaHighlights
