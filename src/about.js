import React from 'react';

function About() {
    return (
      <section className="non-home-section about-section">
        <div className="about-container">
          <div className="about-card">
            <img src="https://i.ibb.co/f4Ktd3q/bfg-banner.jpg"></img>
            <p>Our classic rock and funk lovechild. Imagine <i>The Meters</i> meets <i>The Allman Brothers</i>.</p>
          </div>
          <div className="about-card">
            <img src="https://i.ibb.co/Rj3d5f4/bfg-lite-banner.jpg"></img>
            <p>An acoustic arrangement of our full <i>The B.F.G. Band</i>, for a more relaxed and intimate experience.</p>
          </div>
          <div className="about-card">
            <img src="https://i.ibb.co/HCvWZGN/fis-banner.jpg"></img>
            <p>Our <i>Grateful Dead</i> tribute group focused on high-energy, funked out cover songs.</p>
          </div>
          <div className="about-card">
            <img src="https://i.ibb.co/px1fRgR/dj-banner.jpg"></img>
            <p>Professional DJ services with 20 years of experience, including a state-of-the-art PA and light show.</p>
          </div>
        </div>
      </section>
    );
}

export default About;
