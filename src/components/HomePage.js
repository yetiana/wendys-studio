import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <h2>Welcome to Wendy's Studio</h2>
      <p>Your cozy, modern hair, nail, and beauty care destination. We provide personalized services to make you feel pampered and refreshed.</p>
      <img src="/front-store.JPG" alt="Front Store View" className='homepageImage'/>
      <button onClick={() => window.location.href = '/services'}>View Our Services</button>
    </div>
  );
};

export default HomePage;
