import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Wendy's Studio | 125 Somerset St W, Ottawa</p>
      <p>Phone: (613) 501-2698</p>
      <p>&copy; {new Date().getFullYear()} Wendy's Studio</p>
    </footer>
  );
};

export default Footer;
