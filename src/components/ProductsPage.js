import React from 'react';
import { products } from '../productsData.js';
import './ProductsPage.css';

const ProductsPage = () => {
  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <p>These products can be purchased in store and not directly from the website. Contact the shop for product availability.</p>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
