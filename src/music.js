import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function Music() {
    return (
      <section className="non-home-section music-section">
  
          <h1>FOR YOUR EARS</h1>
          <div className="music-carousel">
            <Carousel showThumbs={false}>
              <iframe src="https://www.youtube.com/embed/IfXMl82rfDY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <iframe src="https://www.youtube.com/embed/kI-d9mqqC7M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <iframe src="https://www.youtube.com/embed/jCOfdFhGkpA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <iframe src="https://www.youtube.com/embed/eKeSZ16q8oA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Carousel>
          </div>
      </section>
    );
  }

export default Music;