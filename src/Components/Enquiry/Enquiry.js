import React from 'react';
import './Enquiry.css'; // Import the corresponding CSS file

const ContactForm = () => {
  return (
    <div className='enquiry'>
    <div className="contact-form-container">
      <form className="contact-form">
        <div className="form-row">
          <input type="text" className="form-input" placeholder="Your Name*" />
          <div className="phone-input">
            <img src="/india.png" alt="Country Flag" className="flag" />
            <input type="tel" className="form-input" placeholder="+91" />
          </div>
        </div>

        <div className="form-row">
          <input type="email" className="form-input" placeholder="Your Email*" />
          <input type="text" className="form-input" placeholder="City" />
        </div>

        <div className="form-row">
          <select name="Budget" className="form-input" placeholder="Budget" >
          <option value="">Budget</option>
          <option value="50 lakh">50 lakh</option>
          <option value="50-80 lakh">50-80 lakh</option>
          <option value="80 lakh - 1 crore">80 lakh - 1 crore</option>
          <option value="1 crore">1 crore</option>
          </select>

          <select name='Source' className="form-input" placeholder="Source" >
          <option value="">Select Source</option>
          <option value="Newspaper">Newspaper</option>
          <option value="Hoarding">Hoarding</option>
          <option value="Email">Email</option>
          <option value="SMS">SMS</option>
          <option value="Google">Google</option>
          <option value="Facebook">Facebook</option>
          <option value="Cinema ad">Cinema ad</option>
          <option value="Broker">Broker</option>
          <option value="Property Portal">Property Portal</option>
          <option value="Word of mouth">Word of mouth</option>
          <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-row">
          <textarea className="form-textarea" placeholder="Message"></textarea>
        </div>

        <p className="form-note">
          I authorize BramhaCorp Ltd and its representatives to Call, SMS, Email or WhatsApp me about its products and offers. 
          This consent overrides any registration for DNC / NDNC.
        </p>

        <div className="form-row">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
