import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import './Testimonials.css';
import Slider from 'infinite-react-carousel';
import './index.js';
import info from './information.js';

function Testimonials() {
  const settings = {
    className: 'container',
    autoplay: true,
    arrows: false,
  };
  return (
    <section className="testimonials">
      <Slider dots {...settings}>
        {info.map((entry) => (
          <div className="testimonials__center" key={entry.key}>
            <ImQuotesLeft className="wh" />
            <blockquote>{entry.testimonial}</blockquote>
            <p>{entry.user}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
