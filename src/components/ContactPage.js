import React from 'react';
import './ContactPage.css';


const ContactPage = () => {
  const phoneNumber = "(613) 501-2698";
  const emailAddress = "wendysstudioottawa@gmail.com";
  // Function to copy phone number to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      alert('Phone number copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };
  // Function to copy email to clipboard
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      alert('Email address copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="phone-section">
        <p>
          Phone: <span onClick={copyToClipboard} className="phone-number">{phoneNumber}</span>
        </p>
      </div>
      <div className="email-section">
        <p>
            Email: <span onClick={copyEmailToClipboard} className="contact-item">{emailAddress}</span>
        </p>
      </div>
      <p><b>OR</b> fill out the form below to make an appointment</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name"><b>Name</b></label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message - include service you'd like to have done</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="map-container">
        <h3>Find Us Here:</h3>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.536788768268!2d-75.68899569999999!3d45.4186796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05a905f6038b%3A0x6f37f134fcdf3f96!2s125%20Somerset%20St%20W%2C%20Ottawa%2C%20ON%20K2P%201J3!5e0!3m2!1sen!2sca!4v1727310519629!5m2!1sen!2sca"
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
