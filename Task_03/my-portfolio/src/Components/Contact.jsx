import React from 'react';

const Contact = () => {
  const socialLinks = [
    { name: 'Email', icon: '✉️', link: 'mailto:john@example.com' },
    { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com/in/johnsmith' },
    { name: 'GitHub', icon: '🐱', link: 'https://github.com/johnsmith' },
    { name: 'Twitter', icon: '🐦', link: 'https://twitter.com/johnsmith' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p>
            I'm always open to discussing new opportunities and interesting projects. 
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.link} className="social-link">
                <div className="social-icon">{social.icon}</div>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
          <button className="btn-primary">Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;