import React from "react";
import "./HeroComponents.css";
import { MdArrowForward } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";
const HeroSection = () => {
    return ( <
        header className = "hero" >
        <
        div className = "container hero__wrapper" >
        <
        div className = "hero__grid" >
        <
        h1 className = "hero__text animate-pop-in" >
        الجامعة التونسية <
        span > للووشو كونغ فو و الرياضات التابعة < /span> < /
        h1 > <
        h3 class = "animate-pop-in" >
        <
        span > Challenge < /span> your limits < /
        h3 > <
        p class = "animate-pop-in" >
        New events every week!Challenge yourself, your mind, your family and friends.Get to know us in the button below <
        /p> <
        LinkR to = "/dashboard/#events"
        className = "btn primary animate-pop-in btn--animated" >
        Events < MdArrowForward / >
        <
        /LinkR> < /
        div > <
        /div> < /
        header >
    );
};

export default HeroSection;