// pages/ContactPage.js
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'john.doe@example.com', href: 'mailto:john.doe@example.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' },
    { icon: Github, label: 'GitHub', value: '@johndoe', href: 'https://github.com/johndoe' }
  ];
  
  return (
    <div style={{paddingTop: '64px', minHeight: '100vh'}}>
      {/* Hero Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h1 className="hero-title">Get In Touch</h1>
          <p style={{fontSize: '1.25rem', color: '#4a5568', maxWidth: '600px', margin: '0 auto'}}>
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <div>
                <h2 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2d3748'}}>Let's Connect</h2>
                <p style={{color: '#718096', marginBottom: '2rem'}}>
                  I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and development.
                </p>
              </div>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="contact-item">
                      <div className="contact-icon">
                        <Icon size={24} />
                      </div>
                      <div className="contact-details">
                        <p className="contact-label">{info.label}</p>
                        <a href={info.href} className="contact-value">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Social Links */}
              <div style={{paddingTop: '2rem'}}>
                <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2d3748'}}>Follow Me</h3>
                <div className="social-links">
                  {[
                    { icon: Github, href: '#', label: 'GitHub' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Mail, href: '#', label: 'Email' }
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a key={index} href={social.href} className="social-link" aria-label={social.label}>
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form">
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2d3748'}}>Send me a message</h3>
              
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="success-title">Message Sent!</h4>
                  <p className="success-description">Thank you for reaching out. I'll get back to you soon!</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="success-link"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-input form-textarea"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{width: '100%'}}
                  >
                    {isSubmitting ? (
                      <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div className="loading-spinner" style={{marginRight: '0.75rem'}}></div>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;