import React from "react";
import "./Footer.css";
import { Link as LinkR } from "react-router-dom";
const Footer = () => {
    const date = new Date().getFullYear();
    return ( <
        footer >
        <
        div className = "footer-wrapper" >
        <
        div className = "footer-wrapper__top" >
        <
        div className = "footer-wrapper__items" >
        <
        div className = "footer-wrapper__item" >
        <
        LinkR className = "navbar__title"
        to = "/" >
        Fit < span > Club < /span> <
        p > Taking the Fitness to the next level < /p> < /
        LinkR > <
        /div> <
        div className = "footer-wrapper__item" >
        <
        h4 > Support < /h4> <
        a href = "/" > Talk to Us < /a> <
        a href = "/" > FAQ < /a> <
        a href = "/" > Information < /a> <
        a href = "/" > Terms & Conditions < /a> < /
        div > <
        /div> <
        div className = "footer-wrapper__items" >
        <
        div className = "footer-wrapper__item" >
        <
        h4 > Fitness Club < /h4> <
        a href = "/" > Pricing < /a> <
        a href = "/" > Events < /a> <
        a href = "/" > Articles < /a> <
        a href = "/" > Our Instructors < /a> < /
        div > <
        div className = "footer-wrapper__item" >
        <
        h4 > Our Newsletter < /h4> <
        form >
        <
        input placeholder = "Your Email" / >
        <
        button className = "btn primary" > Subscribe < /button> < /
        form > <
        /div> < /
        div > <
        /div>

        <
        div className = "footer-wrapper__copyright" >
        <
        small > { date }
        Ftwkf | All Rights Reserved < /small> < /
        div > <
        /div> < /
        footer >
    );
};

export default Footer;