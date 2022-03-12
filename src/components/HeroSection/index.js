import React from "react";
import "./HeroComponents.css";
import { MdArrowForward } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";
const HeroSection = () => {
    return ( <header className = "hero" >
        <div className = "container hero__wrapper" >
        <div className = "hero__grid" >
        < h1 className = "hero__text animate-pop-in" >الجامعة التونسية <span > للووشو كونغ فو و الرياضات التابعة </span> </h1> 

        </div > </div> 
        </header >
    );
};

export default HeroSection;