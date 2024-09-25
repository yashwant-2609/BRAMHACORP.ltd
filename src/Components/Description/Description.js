import React, { useState } from 'react';
import './Description.css'; // Import the corresponding CSS

const Description = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="description-container">
      <div className="header">
        <div className="logo">
          <img src="/MahaRera.png" alt="MahaRERA Logo" />
          <img src="/QR.png" alt="QR code" />
        </div></div>
        
        <div className="project-info">
          <h2>Hues Of Sky : MAHARERA Registration No: P52100051537</h2>
          <p>Available at : Website <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer">https://maharera.mahaonline.gov.in</a></p>
        </div>
      

      <div className={`description-text ${isExpanded ? 'expanded' : ''}`}>
        <p>
          IMPORTANT NOTE – The subject projects identified as “Hues Of Sky” - MAHARERA Registration No. P52100051537; details of which are available on the MAHARERA website ‘https://maharera.mahaonline.gov.in’. 
          The subject projects are registered for identified and defined part portion of larger project having multiple buildings as shown in the entire display of larger project. 
          The entire larger multiple buildings shown are not part of the subject registered projects. 
        </p>
        {isExpanded && (
          <p>
            The subject projects under this correspondence includes apartments as registered with MahaRERA authority. 
          These apartments under MahaRERA registered projects are only offered for advertisement and sale under this correspondence and no other part/s from larger project buildings are offered for advertisement and sale. 
          The other upper vertical and horizontal attached and continuous part/s of larger proposed project building/s will be registered as separate projects and those vertical and horizontal sections of building/s are not part and parcel of subject project for which this advertisement and correspondence is issued.
            This clarification is issued as per provisions mentioned in Real Estate (Regulation and Development) Act, 2016, to avoid any kind of loss or damage to any person and to disclose true and correct information about registered projects. 
            The registered projects shall be developed and completed in accordance with the sanctioned plans, layout plan and specifications approved by the Competent Authorities. For any queries or for better understanding you are requested to contact the Promoter’s address with prior appointment and intimation. *T&C Apply
          </p>
        )}
      </div>

      <div className="toggle-button">
        <button onClick={toggleDescription}>
          {isExpanded ? 'Show Less...' : 'Show More...'}
        </button>
      </div>
    </div>
  );
};

export default Description;
