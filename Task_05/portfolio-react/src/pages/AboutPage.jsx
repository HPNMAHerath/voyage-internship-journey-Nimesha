// pages/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Code Commits', value: '1000+' }
  ];
  
  const journey = [
    {
      year: '2019',
      title: 'Started My Journey',
      description: 'Began learning web development with HTML, CSS, and JavaScript'
    },
    {
      year: '2020',
      title: 'First Full-Stack Project',
      description: 'Built my first complete web application using React and Node.js'
    },
    {
      year: '2021',
      title: 'Joined Tech Company',
      description: 'Started working as a frontend developer at a growing startup'
    },
    {
      year: '2023',
      title: 'Senior Developer',
      description: 'Promoted to senior developer role, leading a team of 4 developers'
    },
    {
      year: '2024',
      title: 'Freelance Success',
      description: 'Started freelancing and built successful projects for clients worldwide'
    }
  ];
  
  return (
    <div style={{paddingTop: '64px', minHeight: '100vh'}}>
      {/* Hero Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'}}>
        <div className="container">
          <div className="grid grid-2" style={{alignItems: 'center'}}>
            <div>
              <h1 className="hero-title" style={{textAlign: 'left', marginBottom: '1.5rem'}}>
                About Me
              </h1>
              <p style={{fontSize: '1.25rem', color: '#4a5568', marginBottom: '1.5rem', lineHeight: '1.6'}}>
                I'm a passionate full-stack developer with a love for creating digital experiences 
                that combine beautiful design with powerful functionality.
              </p>
              <p style={{color: '#718096', marginBottom: '2rem', lineHeight: '1.6'}}>
                With over 5 years of experience in web development, I've had the opportunity to work 
                with startups and established companies, helping them bring their digital visions to life. 
                I specialize in React, Node.js, and modern web technologies.
              </p>
              <Link to="/resume" className="btn btn-primary">
                <Download size={20} />
                Download Resume
              </Link>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '320px',
                height: '320px',
                margin: '0 auto',
                borderRadius: '1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '8px'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '1.25rem',
                  background: '#e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem'
                }}>
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Journey Section */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="section-title">My Journey</h2>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <div className="timeline">
              {journey.map((item, index) => (
                <div key={item.year} className="timeline-item">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;