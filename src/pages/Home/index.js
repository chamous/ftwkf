import React from "react";
import { Link as LinkR } from "react-router-dom";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Service from "../../components/Service";
import ImageTaolo from "../../images/Taolo.gif";
import ImageRun from "../../images/Sanda.gif";
import ImageTrainer from "../../images/Taichi.gif";
import ArticleOne from "../../images/post.png";
import ArticleTwo from "../../images/post2.png";
import ArticleThree from "../../images/post3.png";
import Article from "../../components/Article/Article";
import Sidebar from "../../components/Sidebar";
import {useStateValue} from '../../services/StateProvider';
import "./Home.css";
import Nouveautes from "../../components/Nouveautes";

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
          <Nouveautes />

          {/* BLOG ENTRIES */}
          <section className="container blog">
            <h2>المراجع</h2>
            <div className="blog__entries">
              <Article
                  bgImg={ArticleOne}
                  title="Fédération internationale de wushu"

              />
              <Article
                  bgImg={ArticleTwo}
                  title="Ministère de la Jeunesse et des Sports"
                  lien=""
              />
              <Article
                  bgImg={ArticleThree}
                  title="Comité national olympique tunisien"
                  author=""
              />
            </div>
          </section>

        </main>

        <Footer />
      </>
  );
};

export default Home;