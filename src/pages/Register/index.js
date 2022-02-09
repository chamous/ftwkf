import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import {useStateValue} from '../../services/StateProvider';
import Footer from "../../components/Footer";
import {scroller} from 'react-scroll';
import Sidebar from "../../components/Sidebar";
import './register.css'
import {Tabs} from "antd";
import CoachForm from "./CoachForm/coachForm";
import ArbitratorForm from "./ArbitratorForm/arbitratorForm";
import ClubForm from "./ClubForm/clubForm";

const Register = ({ history }) => {
  const { TabPane } = Tabs;
  const [{isSidebarOpen},dispatch] = useStateValue();
  function callback(key) {
    console.log(key);
  }
  const [selectedIndex,setSelectedIndex]=useState(1);

  useEffect(() => {
    scroller.scrollTo('registration',{
      duration : 1000,
      smooth : true,
      offset : -160,
      exact : "true",
    })
  }, []);
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})}/>
      <Navbar toggle={()=>dispatch({type :'TOGGLE_SIDEBAR'})}/>
      <section className="container ">
        <div style={{height: 120}}/>
        <div className="tabs-container">
            <div className={(selectedIndex===1? 'active-tab':'tab')}  onClick={()=>{setSelectedIndex(1)}}>Entraineur</div>
            <div className={(selectedIndex===2? 'active-tab':'tab')}  onClick={()=>{setSelectedIndex(2)}}>Arbitre</div>
            <div className={(selectedIndex===3? 'active-tab':'tab')}  onClick={()=>{setSelectedIndex(3)}}>Club</div>
        </div>
          {selectedIndex===1 ?
              <CoachForm/>
              : selectedIndex===2?
              <ArbitratorForm/>
              :<ClubForm/>

          }
        {/*<Tabs tabPosition={'top'}  onChange={callback}>
          <TabPane tab="Entraineur" key="1">
            <ArbitratorForm/>
          </TabPane>
          <TabPane tab="Arbitre" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Club" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>*/}
      </section>
      <Footer />
    </>
  );
};

export default Register;
