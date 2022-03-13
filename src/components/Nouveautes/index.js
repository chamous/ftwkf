import React from "react";
import "./Nouveautes.css";
import calendario from "../../assets/calendario.svg";
import ducha from "../../assets/ducha.svg";
import pesa from "../../assets/pesa.svg";
import salud from "../../assets/salud.svg";

const Nouveautes = () => {
  return (
    <section id="Nouveautes" className="container text-center">
      <h2 className="p-3 m-3">Nos Nouveautes</h2>
      <div className="Nouveautes col-12">
        <div className="col-4 text-center">
              <div className="feature">
                <img className="feature__img" src={calendario} alt="ftwkf events" />
                <h4>COOL EVENTS</h4>
              </div>
        </div>

        <div className="col-4 text-center">
        <div className="feature">
          <img
            className="feature__img"
            src={salud}
            alt="Medical Attention ftwkf"
          />
          <h4>MEDICAL ATTENTION</h4>
        </div>
        </div>

        <div className="col-4 text-center">
              
        <div className="feature">
          <img className="feature__img" src={pesa} alt="ftwkf Equipment" />
          <h4>EQUIPMENT</h4>
        </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default Nouveautes;
