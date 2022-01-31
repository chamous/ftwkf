import React, { useState, useEffect} from "react";
import api from "../../services/api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Login.css";
import HeroSection from "../../components/HeroSection";
import {scroller} from 'react-scroll';
import {useStateValue} from '../../services/StateProvider';
import Sidebar from "../../components/Sidebar";

const Login = ({ history }) => {
  const [{isSidebarOpen},dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    //The baseUrl is explicit, as first argument we pass the route to post, second argument an object with the info
    const response = await api.post("/login", { email, password });

    //If the could login, we can get the data,
    const userId = response.data._id || false;

    if (userId) {
      //We create a localstorage to have the info in all the SPA
      localStorage.setItem("user", userId);
      dispatch({
        type :'SET_USER',
        user : userId
      })
      history.push('/dashboard');
    } else {
      const { message } = response.data;
      alert(message);
    }
  };
  useEffect(() => {
    scroller.scrollTo('registration',{
      duration : 1000,
      smooth : true,
      offset : -80,
      exact : "true",
    })
  }, []);
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})}/>
      <Navbar toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})}/>
      <HeroSection/>
      <section className="container registration">
        <h2>Login</h2>
        <p>
          Please <strong>Login</strong> into your account
        </p>
        <form className="registration__form" onSubmit={handleSubmit}>
          <input
            required
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Your Email"
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <input
            required
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Your Password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <button className="btn primary">Submit</button>
          <button
            className="btn secondary"
            onClick={() => history.push("/Affiliation")}
          >
            Not an user? Affiliation
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Login;
