import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR, useHistory } from "react-router-dom";
import { useStateValue } from '../../services/StateProvider';
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggle, isHome }) => {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const logOutUser = () => {
    window.localStorage.clear();
    dispatch({
      type: 'SET_USER',
      user: null
    });
    toggle();
    history.go(0);
  }
  const homeLinks = () => {
    return (
      <>
        <LinkR to="about" onClick={toggle}>À propos de nous</LinkR>
        <LinkR to="Nouveautes" onClick={toggle}>Nouveautes</LinkR>
      </>
    )
  }
  const userLinks = () => {
    return (
      <>
        <LinkR to="/user/events" onClick={toggle}>My Events</LinkR>
        <LinkR to="/events" onClick={toggle}>Create Event</LinkR>
        <LinkR to="/user/subscriptions" onClick={toggle}>My subscriptions</LinkR>
        <LinkR onClick={logOutUser} >Log Out</LinkR>
      </>
    )
  }
  const newUserLinks = () => {
    return (
      <>
        <LinkR to="/login" onClick={toggle}>Log In</LinkR>
        <LinkR to="/Affiliation" onClick={toggle}>Affiliation</LinkR>
      </>
    )
  }
  return (
    <aside
      className={`sidebar ${isOpen ? "sidebar--open" : "sidebar--closed"}`}
    >
      <FaTimes className="sidebar__close-btn" onClick={toggle} />
      <div className="sidebar__options">
        {isHome && homeLinks()}
        {user ? userLinks() : newUserLinks()}
      </div>
    </aside>
  );
};

export default Sidebar;
