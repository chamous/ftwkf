import React from "react";
import "./Footer.css";
import { Link as LinkR } from "react-router-dom";
const Footer = () => {
    const date = new Date().getFullYear();
    return (<footer>
                    <div className = "footer-wrapper">
                        <div className = "footer-wrapper__top" >
                            <div className = "footer-wrapper__items" >
                                <div className = "footer-wrapper__item" >
                                    <LinkR className = "navbar__title" to = "/" ><span> FTWKF </span> <p> Nous somme là pour ameliorer le wushu en Tunisie </p> </LinkR> 
                                </div> 
                                        
                            </div> 
                                    <div className = "footer-wrapper__items" >
                                        <div className = "footer-wrapper__item" >
                                            <h4> La Fédération </h4> 
                                            <a href = "/" > Pricing </a>
                                            <a href = "/" > Events </a> 
                                            <a href = "/" > Articles </a> 
                                            <a href = "/" > Our Instructors </a> 
                                        </div> 
                                                <div className = "footer-wrapper__item" >
                                                    <h4> Nos Nouveautesl </h4>
                                                        <form>
                                                        <input placeholder = "Your Email" /><button className = "btn primary" > Subscribe </button>
                                                        </form>
                                                </div> 
                                        </div> 
                                    </div>
                                            <div className = "footer-wrapper__copyright" >
                                                <small> { date } Ftwkf | All Rights Reserved </small>
                                            </div> 
                    </div>
             </footer>
    );
};

export default Footer;