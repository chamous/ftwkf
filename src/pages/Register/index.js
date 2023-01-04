import React, {useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './register.css';
import ArbitratorForm from './ArbitratorForm/arbitratorForm';
import ClubForm from './ClubForm/clubForm';
import AddSupporter from './SupporterForm/add_supporter';

function Register() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <>
      <Navbar />
      <section className="container ">
        <div style={{ height: 120 }} />
        <div className="tabs-container">
          <div className={(selectedIndex === 1 ? 'active-tab' : 'tab')} onClick={() => { setSelectedIndex(1); }}>حكم</div>
          <div className={(selectedIndex === 2 ? 'active-tab' : 'tab')} onClick={() => { setSelectedIndex(2); }}>نادي أو جمعية</div>
          <div className={(selectedIndex === 3 ? 'active-tab' : 'tab')} onClick={() => { setSelectedIndex(3); }}>محب</div>
        </div>
          {selectedIndex === 1
            ? <ArbitratorForm />
            :selectedIndex === 2
                  ? <ClubForm /> :<AddSupporter/>
          }
      </section>
      <Footer />
    </>
  );
}

export default Register;
