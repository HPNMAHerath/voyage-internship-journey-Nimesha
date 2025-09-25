import React from 'react';

const Greeting = () => {
  const hour = new Date().getHours();
  const getGreeting = () => {
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };
  
  return (
    <section className="greeting">
      <div className="container">
        <h1>{getGreeting()}</h1>
        <p>I'm a Full-Stack Developer passionate about creating amazing web experiences</p>
        <button className="btn-primary">View My Work</button>
      </div>
    </section>
  );
};

export default Greeting;
