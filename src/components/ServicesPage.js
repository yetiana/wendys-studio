import React from 'react';
import { hairServices, nailServices, hairRemovalServices } from '../servicesData';
import './ServicesPage.css';
import { NavLink } from 'react-router-dom';  // Import NavLink

const ServicesPage = () => {
  return (
    <div className="container">
      <h2>Hair Services</h2>
      <NavLink exact to="/">
        <img src="/hairdresser.png" alt="Hairdresser logo" className="logo" />
      </NavLink>
      <ul>
        {hairServices.map((service, index) => (
          <li key={index}>{service.service}: {service.price}</li>
        ))}
      </ul>

      <h2>Nail Services</h2>
      <NavLink exact to="/">
        <img src="/manicure.png" alt="Manicure logo" className="logo" />
      </NavLink>
      <ul>
        {nailServices.map((service, index) => (
          <li key={index}>{service.service}: {service.price}</li>
        ))}
      </ul>

      <h2>Hair Removal Services</h2>
      <NavLink exact to="/">
        <img src="/wax.png" alt="Wax logo" className="logo" />
      </NavLink>
      <ul>
        {hairRemovalServices.map((service, index) => (
          <li key={index}>{service.service}: {service.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
