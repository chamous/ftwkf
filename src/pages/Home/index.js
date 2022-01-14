import React from "react";
import { Link as LinkR } from "react-router-dom";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Features from "../../components/Features";
import Testimonials from "../../components/Testimonials";
import Service from "../../components/Service";
import ImageCardio from "../../images/cardio.jpg";
import ImageRun from "../../images/run.jpg";
import ImageTrainer from "../../images/trainer.jpg";
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
          <Service title="Cardio" imgUrl={ImageCardio} />
          <Service title="Personal Trainer" imgUrl={ImageRun} />
          <Service title="Fitness Events" imgUrl={ImageTrainer} />
        </section>
        <Features />
        <Testimonials />

        {/* BLOG ENTRIES */}
        <section className="container blog">
          <h2>Read Our Fitness Blog</h2>
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
            <h2>Ready to get fit?</h2>
            <LinkR to="/dashboard/" className="btn secondary">
              Our Events!
            </LinkR>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
