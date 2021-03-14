import React from 'react';

function Contact() {
    return (
      <section className="non-home-section">
          <div className="contact-card">
              <h1>Let's talk!</h1>
              <div className="contact-card-info">
                <a className="contact-link" href="tel: +14708956614"><i className="fas fa-phone"></i><h3>+1 (470) 895-6614</h3></a>
                <a className="contact-link" href="mailto: gratefuldanatl@gmail.com"><i className="fas fa-at"></i><h3>gratefuldanatl@gmail.com</h3></a>  
              </div>
          </div>
      </section>
    );
}

export default Contact;