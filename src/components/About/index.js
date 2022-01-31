import React from "react";
import aboutImg from "../../images/aboutus.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="container p-3 about">
      <figure className="about__img">
        <img
          loading="lazy"
          src={aboutImg}
          alt="FitClub About Ilustration"
          aria-label="FitClub Image Example"
        />
      </figure>
      <header className="about__header">
        <h2>
        À propos <span>de nous</span>
        </h2>
        <p className="txt-justify">
        La fédération Tunisienne de Wushu Kung Fu et Disciplines associées est une université sportive tunisienne fondée le 9 septembre 2005, supervisant le wushu kung fu et disciplines associées, une université sportive tunisienne fondée le 9 septembre 2005,supervisant le sport du Wushu Kung fu et Disciplines associées .
        </p>
        <h2>
        QU’EST CE QUE  <span>LE WUSHU KUNG FU ?</span>
        </h2>
        <p className="txt-justify">
        Le wushu (chinois : 武術 ; pinyin : wǔshù ; litt. « art martial ») ou wushu moderne est le sport de compétition des arts martiaux chinois traditionnels.
Il a été créé en République populaire de Chine après 1949. La majorité des formes martiales (taolu) présentées en compétition, ont été définies par des comités désignés par le gouvernement, d’après des formes traditionnelles. À l’époque actuelle, le wushu est devenu un sport international à l’initiative de la Fédération internationale de wushu (IWUF), qui organise des championnats mondiaux tous les deux ans.        </p>
      </header>
    </section>
  );
};

export default About;
