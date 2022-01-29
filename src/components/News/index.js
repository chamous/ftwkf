import React from "react";
import "./News.css";
import calendario from "../../assets/calendario.svg";
import ducha from "../../assets/ducha.svg";
import pesa from "../../assets/pesa.svg";
import salud from "../../assets/salud.svg";

const News = () => {
  return (
    <section id="News" className="container m-3 center">
      <h2 className="m-3">Our News</h2>
      <div className="News">
        <div className="feature">
          <img className="feature__img" src={calendario} alt="FitClub events" />
          <h4>COOL EVENTS</h4>
        </div>
        <div className="feature">
          <img
            className="feature__img"
            src={salud}
            alt="Medical Attention FitClub"
          />
          <h4>MEDICAL ATTENTION</h4>
        </div>
        <div className="feature">
          <img className="feature__img" src={pesa} alt="FitClub Equipment" />
          <h4>EQUIPMENT</h4>
        </div>
        <div className="feature">
          <img className="feature__img" src={ducha} alt="FitClub Showers" />
          <h4>FREE SHOWERS</h4>
        </div>
      </div>
    </section>
  );
};

export default News;