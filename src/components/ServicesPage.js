import React from 'react';
import { hairServices, nailServices, hairRemovalServices } from '../servicesData';

const ServicesPage = () => {
  return (
    <div className="container">
      <h1>Our Services</h1>

      <h2>Hair Services</h2>
      <ul>
        {hairServices.map((service, index) => (
          <li key={index}>{service.service}: {service.price}</li>
        ))}
      </ul>

      <h2>Nail Services</h2>
      <ul>
        {nailServices.map((service, index) => (
          <li key={index}>{service.service}: {service.price}</li>
        ))}
      </ul>

      <h2>Hair Removal Services</h2>
      <ul>
        {hairRemovalServices.map((service, index) => (
          <li key={index}>{service.service}: {service.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
