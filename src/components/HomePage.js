import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to Wendy's Studio</h1>
      <p>Your cozy, modern hair, nail, and beauty care destination. We provide personalized services to make you feel pampered and refreshed.</p>
      <button onClick={() => window.location.href = '/services'}>View Our Services</button>
    </div>
  );
};

export default HomePage;
