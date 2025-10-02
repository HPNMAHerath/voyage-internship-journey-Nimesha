// pages/PortfolioPage.js
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '🛒',
      description: 'Full-featured e-commerce platform with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: '💳',
      description: 'Secure mobile banking application with biometric authentication',
      technologies: ['React Native', 'Firebase', 'Expo'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Task Management Tool',
      category: 'web',
      image: '📝',
      description: 'Collaborative task management tool for teams',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'design',
      image: '🎨',
      description: 'Modern portfolio website with smooth animations',
      technologies: ['React', 'CSS3', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Social Media App',
      category: 'mobile',
      image: '📱',
      description: 'Social media platform for sharing photos and stories',
      technologies: ['Flutter', 'Firebase', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Dashboard Analytics',
      category: 'web',
      image: '📊',
      description: 'Real-time analytics dashboard for business insights',
      technologies: ['React', 'D3.js', 'Python', 'Flask'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];
  
  const categories = ['all', 'web', 'mobile', 'design'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div style={{paddingTop: '64px', minHeight: '100vh'}}>
      {/* Hero Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h1 className="hero-title">My Portfolio</h1>
          <p style={{fontSize: '1.25rem', color: '#4a5568', maxWidth: '600px', margin: '0 auto'}}>
            Here's a collection of projects I've worked on, showcasing my skills in web development, 
            mobile applications, and user interface design.
          </p>
        </div>
      </section>
      
      {/* Filter Buttons */}
      <section style={{padding: '2rem 0', background: 'white', borderBottom: '1px solid #e2e8f0'}}>
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <span>{project.image}</span>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a href={project.githubUrl} className="project-link">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;