import React from 'react';

function About() {
    return (
      <section className="non-home-section about-section">
        <div className="about-container">
          <div className="about-card">
            <div className="about-card-title">
              <h2>The B.F.G. Band</h2>
            </div>
            <div className="about-card-info">
              <p>Our classic rock and funk lovechild. Imagine <i>The Meters</i> meets <i>The Allman Brothers</i>.</p>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-title">
              <h2>B.F.G. Lite</h2>
            </div>
            <div className="about-card-info">
              <p>An acoustic arrangement of our full <i>The B.F.G. Band</i>, for a more relaxed and intimate experience.</p>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-title">
              <h2>Funk is Dead</h2>
            </div>
            <div className="about-card-info">
              <p>Our <i>Grateful Dead</i> tribute group focused on high-energy, funked out cover songs.</p>
            </div>
          </div>
          <div className="about-card">
            <div className="about-card-title">
              <h2>Pro DJ Services</h2>
            </div>
            <div className="about-card-info">
              <p>Professional DJ services with 20 years of experience, including a state-of-the-art PA and light show.</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;