import React from 'react';

function Contact() {
    return (
      <section className="non-home-section contact-section">
        <h1>Reach out!</h1>
          <div className="contact-card">
              <img src="https://i.ibb.co/SKSsCtF/bfg-banner-1.jpg" alt="BFG Logo"></img>
              <div className="contact-card-info">
                <a className="contact-link" href="tel: +14708956614"><h3>(470) 895-6614</h3></a>
                <a className="contact-link" href="mailto:thebfgbandatl@gmail.com"><h3>thebfgbandatl@gmail.com</h3></a>  
              </div>
          </div>
      </section>
    );
}

export default Contact;