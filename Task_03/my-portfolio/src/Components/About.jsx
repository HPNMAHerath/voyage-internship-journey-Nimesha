import React from 'react';

const About = () => {
  const skills = ['React', 'Node.js', 'Python', 'MongoDB', 'TypeScript', 'AWS'];
  
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with 3+ years of experience building 
              scalable web applications. I love turning complex problems into simple, 
              beautiful designs.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or enjoying a good cup of coffee.
            </p>
            <div className="skills">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="avatar">JS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;