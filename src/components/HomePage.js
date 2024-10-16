import React from 'react';
import { products } from '../productsData';
import { NavLink } from 'react-router-dom';

const productsToShow = products.slice(0, 3); // only show 3 products

const HomePage = () => {

  return (
    <div className="container">
      <h2>Welcome to Wendy's Studio</h2>
      <p>Located in the heart of downtown, Wendy provides personalized services to make you feel pampered and refreshed.</p>
      <img src="/front-store.JPG" alt="Front Store View" className='homepageImage'/>
      <h3>Services</h3>
      <div className='services-grid'>
        <NavLink exact to="/services">
          <img src="/hairdresser.png" alt="Hairdresser logo" className="logo" />
        </NavLink>
        <NavLink exact to="/services">
          <img src="/manicure.png" alt="Manicure logo" className="logo" />
        </NavLink>
        <NavLink exact to="/services">
          <img src="/wax.png" alt="Wax logo" className="logo" />
        </NavLink>
      </div>
      <div className='services-text'>
        <p>Hair</p>
        <p>Nails</p>
        <p>Wax</p>
      </div>
      <button onClick={() => window.location.href = '/services'}>View Services</button>
      <h3>Products</h3>
      <div className="products-grid">
        {productsToShow.map((product, index) => (
          <div className="product-item" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <button onClick={() => window.location.href = '/products'}>View All Products</button>
      <h3>About</h3>
      <NavLink exact to="/services">
        <img src="/wendy.png" alt="Wendy" />
      </NavLink>
      <p>Small-business owner and professionaly trained hairdresser, Wendy does it all!!!</p>
      <button onClick={() => window.location.href = '/about'}>Learn More About Wendy</button>
    </div>
  );
};

export default HomePage;
