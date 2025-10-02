// pages/ResumePage.js
import React from 'react';
import { Download, Award } from 'lucide-react';

const ResumePage = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      period: '2023 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
      achievements: [
        'Led a team of 4 developers on major product launches',
        'Improved application performance by 40%',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2021 - 2023',
      description: 'Developed responsive web applications and collaborated with design teams.',
      achievements: [
        'Built 15+ responsive web applications',
        'Reduced load times by 35% through optimization',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'WebSolutions Ltd.',
      period: '2019 - 2021',
      description: 'Worked on various client projects, learning modern web development practices.',
      achievements: [
        'Successfully delivered 20+ client projects',
        'Gained expertise in React, Vue.js, and Node.js',
        'Contributed to open-source projects'
      ]
    }
  ];
  
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      gpa: '3.8/4.0',
      description: 'Focused on software engineering and web technologies'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      school: 'CodeAcademy',
      period: '2019',
      gpa: 'Certificate',
      description: 'Intensive program covering modern web development stack'
    }
  ];
  
  const certifications = [
    { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Google Cloud Professional', issuer: 'Google Cloud', year: '2022' },
    { name: 'React Developer Certification', issuer: 'Meta', year: '2021' }
  ];
  
  return (
    <div style={{paddingTop: '64px', minHeight: '100vh'}}>
      {/* Hero Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h1 className="hero-title">My Resume</h1>
          <p style={{fontSize: '1.25rem', color: '#4a5568', marginBottom: '2rem'}}>
            A comprehensive overview of my professional experience, education, and skills
          </p>
          <button className="btn btn-primary">
            <Download size={20} />
            Download PDF
          </button>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div style={{marginBottom: '1rem'}}>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                    <p style={{color: '#718096', fontSize: '0.9rem'}}>{exp.period}</p>
                  </div>
                  <p className="timeline-description">{exp.description}</p>
                  <ul className="timeline-list">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <div className="grid" style={{gap: '2rem'}}>
              {education.map((edu, index) => (
                <div key={index} className="card">
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem'}}>
                    <div>
                      <h3 className="timeline-title">{edu.degree}</h3>
                      <p className="timeline-company">{edu.school}</p>
                      <p style={{color: '#718096'}}>{edu.description}</p>
                    </div>
                    <div style={{textAlign: 'right'}}>
                      <p style={{color: '#718096', fontSize: '0.9rem'}}>{edu.period}</p>
                      <p className="timeline-company">{edu.gpa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <div className="grid grid-2">
              {certifications.map((cert, index) => (
                <div key={index} className="card" style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)'}}>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                    <div className="service-icon blue" style={{marginRight: '1rem', marginBottom: '0'}}>
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 style={{fontWeight: 'bold', color: '#2d3748', marginBottom: '0.25rem'}}>{cert.name}</h3>
                      <p style={{color: '#667eea', fontSize: '0.9rem', marginBottom: '0.25rem'}}>{cert.issuer}</p>
                      <p style={{color: '#718096', fontSize: '0.9rem'}}>{cert.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;