import React, {useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './register.css';
import CoachForm from './CoachForm/coachForm';
import ArbitratorForm from './ArbitratorForm/arbitratorForm';
import ClubForm from './ClubForm/clubForm';

function Register() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <>
      <Navbar />
      <section className="container ">
        <div style={{ height: 120 }} />
        <div className="tabs-container">
          <div className={(selectedIndex === 1 ? 'active-tab' : 'tab')} onClick={() => { setSelectedIndex(1); }}>مدرب</div>
          <div className={(selectedIndex === 2 ? 'active-tab' : 'tab')} onClick={() => { setSelectedIndex(2); }}>حكم</div>
          <div className={(selectedIndex === 3 ? 'active-tab' : 'tab')} onClick={() => { setSelectedIndex(3); }}>نادي أو جمعية</div>
        </div>
        {selectedIndex === 1
          ? <CoachForm />
          : selectedIndex === 2
            ? <ArbitratorForm />
            : <ClubForm />}
      </section>
      <Footer />
    </>
  );
}

export default Register;
