import React, {useEffect, useState} from "react";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR, useHistory} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {animateScroll as scroll} from "react-scroll";
import {useStateValue} from "../../services/StateProvider";
import "./NavbarElements.css";


const Navbar = ({toggle, isHome}) => {
    const [{user}, dispatch] = useStateValue();
    const [navbarStatus, setNavbarStatus] = useState(true);
    const history = useHistory();
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    const changeNav = () => {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
            if (window.scrollY >= 80) {
                navbar.classList.remove("navbar--transparent");
                navbar.classList.add("navbar--active");
            } else {
                navbar.classList.remove("navbar--active");
                navbar.classList.add("navbar--transparent");
            }
        }
    };
    const logOutUser = () => {
        window.localStorage.clear();
        dispatch({
            type: 'SET_USER',
            user: null
        });
        history.go(0);
    }
    const homeLinks = () => {
        return (<>
                <li className="navbar__link"><LinkS to="about"smooth duration={500}exact="true"offset={-80}>{' '}À propos{' '}</LinkS></li>{' '}
                <li className="navbar__link"><LinkS to="Nouveautes"smoothduration={500}exact="true" offset={-80}>{' '} Nouveautés{' '}</LinkS></li>
            </>
        )
    }
    const newUserLinks = () => {
        return (< >
                <li className="navbar__link"><LinkR to="/login"><button className="btn primary1"> Se connecter </button></LinkR></li>
                <li className="navbar__link"><LinkR to="/register">
                    <button className="btn primary"> Affiliation</button>
                </LinkR></li>
            </>
        )
    }
    const userLinks = () => {
        return (< >
                <li className="navbar__link"><LinkR onClick={() => setNavbarStatus(false)} to="/events"> Create
                    Event </LinkR></li>
                <li className="navbar__link dropdown">
                    <button className="btn primary dropbtn"> My Account</button>
                    <div className="dropdown-content">
                        <LinkR to="/events"> Create Event </LinkR>
                        <LinkR to="/user/events"> My Events </LinkR> <LinkR to="/user/subscriptions"> My
                        subscriptions </LinkR>
                        <LinkR onClick={logOutUser}> Log Out </LinkR>
                    </div>
                </li>
            </>
        )
    }
    useEffect(() => {
            window.addEventListener("scroll", changeNav);
            if (!navbarStatus) {
                window.removeEventListener("scroll");
            }
        },
        [navbarStatus]);
    return (
        <nav className="navbar navbar--transparent">
            <div className="navbar__wrapper">
                <ul className="navbar__items">
                    <LinkR to="/" onClick={toggleHome}>
                    <img src="./logo-ftwkf.png"/>
                    </LinkR>
                    <li className="navbar__title-wrapper">
                        <LinkR className="navbar__title"  to="/" onClick={toggleHome}>
                            <span> Federation Tunisienne </span><br/> 
                            <span className="navbar__title1"> de Wushu Kung Fu </span>
                        </LinkR>
                    
                    </li>
                    {isHome && homeLinks()} {user ? userLinks() : newUserLinks()}
                </ul>
                <div className="navbar__burger-icon" onClick={toggle}><FaBars/></div>
            </div>
        </nav>
    );
};
export default Navbar;