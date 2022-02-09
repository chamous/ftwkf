import React from "react";
import { Link as LinkR } from "react-router-dom";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Nouveautés from "../../components/Nouveautés";
import Testimonials from "../../components/Testimonials";
import Service from "../../components/Service";
import ImageTaolo from "../../images/Taolo.gif";
import ImageRun from "../../images/Sanda.gif";
import ImageTrainer from "../../images/Taichi.gif";
import ArticleOne from "../../images/post.jpg";
import ArticleTwo from "../../images/post2.jpg";
import ArticleThree from "../../images/post3.jpg";
import Article from "../../components/Article/Article";
import Sidebar from "../../components/Sidebar";
import {useStateValue} from '../../services/StateProvider';
import "./Home.css";

const Home = () => {
  const [{isSidebarOpen},dispatch] = useStateValue();
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})} isHome={true}/>
      <Navbar toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})} isHome={true}/>
      <HeroSection />
      <main>
        <About />
        <section className="services">
          <Service title="Taolu" imgUrl={ImageTaolo} />
          <Service title="Sanda" imgUrl={ImageRun} />
          <Service title="Taichi" imgUrl={ImageTrainer} />
        </section>
        <Nouveautés />
        <Testimonials />

        {/* BLOG ENTRIES */}
        <section className="container blog">
          <h2>Blog</h2>
          <div className="blog__entries">
            <Article
              bgImg={ArticleOne}
              title="How to create your fitness routine"
              author="John Smith"
            />
            <Article
              bgImg={ArticleTwo}
              title="Living a healthy lifestyle is easy"
              author="Carla Harvis"
            />
            <Article
              bgImg={ArticleThree}
              title="Marathon Event rocked last sunday"
              author="Joshua Arreola"
            />
          </div>
        </section>

        <div className="callto">
          <section className="container callto__wrapper">
            <h2>Notre calendrier</h2>
            <LinkR to="/dashboard/" className="btn secondary">
            calendrier
            </LinkR>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
