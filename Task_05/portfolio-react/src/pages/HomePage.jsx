// pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, ChevronDown, Code, Palette, Smartphone } from 'lucide-react';

const HomePage = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Mobile App Developer', 'Frontend Specialist'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Mobile Development', level: 75 }
  ];
  
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive and dynamic web applications using modern frameworks',
      colorClass: 'blue'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces and experiences',
      colorClass: 'purple'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Developing cross-platform mobile applications for iOS and Android',
      colorClass: 'green'
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="avatar">JD</div>
          
          <h1 className="hero-title">John Doe</h1>
          
          <div className="hero-subtitle">
            <span>{roles[currentRole]}</span>
          </div>
          
          <p className="hero-description">
            Passionate developer with 5+ years of experience creating innovative digital solutions. 
            I transform ideas into beautiful, functional applications that make a difference.
          </p>
          
          <div className="hero-buttons">
            <Link to="/portfolio" className="btn btn-primary">
              View My Work
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
              <Mail size={20} />
            </Link>
          </div>
        </div>
        
        <div className="animate-bounce" style={{position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)'}}>
          <ChevronDown size={32} color="#718096" />
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="grid grid-2">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="grid grid-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="card">
                  <div className={`service-icon ${service.colorClass}`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;