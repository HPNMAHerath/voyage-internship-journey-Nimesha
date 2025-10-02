// pages/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { ExternalLink, Github, Star } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch project data based on the ID
  const project = {
    id: id,
    title: 'E-Commerce Platform',
    image: '🛒',
    description: 'A comprehensive e-commerce platform built with modern web technologies.',
    longDescription: 'This full-featured e-commerce platform was built to provide a seamless shopping experience for users while offering comprehensive management tools for administrators. The platform includes user authentication, product catalog, shopping cart, payment processing, and order management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    features: [
      'User authentication and authorization',
      'Product catalog with search and filters',
      'Shopping cart and wishlist functionality',
      'Secure payment processing with Stripe',
      'Order tracking and management',
      'Admin dashboard for inventory management',
      'Responsive design for all devices',
      'Real-time notifications'
    ],
    challenges: [
      'Implementing secure payment processing',
      'Optimizing database queries for large product catalogs',
      'Creating a responsive design that works across all devices',
      'Building a scalable architecture to handle high traffic'
    ],
    liveUrl: '#',
    githubUrl: '#'
  };
  
  return (
    <div style={{paddingTop: '64px', minHeight: '100vh'}}>
      <section className="section" style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <div style={{
              width: '6rem',
              height: '6rem',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              borderRadius: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              fontSize: '2.5rem'
            }}>
              {project.image}
            </div>
            <h1 className="hero-title" style={{marginBottom: '1rem'}}>{project.title}</h1>
            <p style={{fontSize: '1.25rem', color: '#4a5568', marginBottom: '2rem'}}>{project.description}</p>
            
            <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap'}}>
              <a href={project.liveUrl} className="btn btn-primary">
                <ExternalLink size={20} />
                View Live
              </a>
              <a href={project.githubUrl} className="btn btn-secondary">
                <Github size={20} />
                View Code
              </a>
            </div>
          </div>
          
          {/* Technologies */}
          <div className="card" style={{marginBottom: '2rem'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2d3748'}}>Technologies Used</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                    color: '#667eea',
                    borderRadius: '2rem',
                    fontWeight: '600'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Project Details */}
          <div className="grid grid-2" style={{marginBottom: '2rem'}}>
            <div className="card">
              <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2d3748'}}>Key Features</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                {project.features.map((feature, index) => (
                  <li key={index} style={{display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem'}}>
                    <Star size={20} color="#fbbf24" style={{flexShrink: 0, marginTop: '0.125rem'}} />
                    <span style={{color: '#718096'}}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card">
              <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2d3748'}}>Challenges Overcome</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                {project.challenges.map((challenge, index) => (
                  <li key={index} style={{display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem'}}>
                    <div style={{width: '0.5rem', height: '0.5rem', background: '#667eea', borderRadius: '50%', flexShrink: 0, marginTop: '0.5rem'}}></div>
                    <span style={{color: '#718096'}}>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Project Description */}
          <div className="card">
            <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2d3748'}}>Project Overview</h3>
            <p style={{color: '#718096', lineHeight: '1.6'}}>{project.longDescription}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;