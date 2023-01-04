import React, { useEffect, useState } from 'react';
import { Link as LinkR, useHistory } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Event from '../Event';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import Footer from '../Footer';
import api from '../../services/api';
import { useStateValue } from '../../services/StateProvider';
import './UserEventsHandler.css';
import Sidebar from '../Sidebar';
import Payment from '../Payment';

function UserEventsHandler({
  title,
  URL,
  noEventsMessage,
  noEventsLink,
  noEventsTitleLink,
}) {
  const [{ user, isSidebarOpen }, dispatch] = useStateValue();
  const [userEvents, setUserEvents] = useState([]);
  const [paymentValue, setPaymentValue] = useState(0);
  const [noEvents, setNoEventsStatus] = useState(false);
  const history = useHistory();
  const lastItemFromRoute = URL.substring(URL.lastIndexOf('/') + 1);
  const matchingRoute = 'subscriptions';
  const getEvents = async () => {
    const response = await api.get(URL, { headers: { user } });
    const isNotEmpty = response.data.length;
    if (isNotEmpty) {
      setUserEvents(response.data);
      console.log(response.data);
      const fetchedEvents = [...response.data];
      console.log('++ GETTING EVENTS PRICE');
      setPaymentValue(getEventsPrice(fetchedEvents));
      console.log('++paymentvalue', paymentValue);
      setNoEventsStatus(false);
    } else {
      setNoEventsStatus(true);
    }
  };
  const getEventsPrice = (events) => {
    if (events.length === 1) { return events[0].price; }
    let acc = 0;
    for (let i = 0; i < events.length; i++) {
      acc += events[i].price;
    }
    return acc;
  };
  const setNoEventsMessage = () => (
    <div>
      <h3>{noEventsMessage}</h3>
      <LinkR to={noEventsLink} className="btn primary">{noEventsTitleLink}</LinkR>
    </div>
  );
  useEffect(() => {
    if (user) {
      getEvents();
      scroller.scrollTo('events', {
        duration: 1000,
        smooth: true,
        offset: -80,
        exact: 'true',
      });
    } else {
      history.push('/login');
    }
    // eslint-disable-next-line
    }, [URL])
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggle={() => dispatch({ type: 'TOGGLE_SIDEBAR' })} />
      <Navbar toggle={() => dispatch({ type: 'TOGGLE_SIDEBAR' })} />
      <HeroSection />
      <section id="events" className="container m-3">
        <h2>{title}</h2>
        {(!noEvents && lastItemFromRoute === matchingRoute)
          ? (
            <div className="events__payment-wrapper">
              {/** WE ARE SHOWING THE SUBSCIRPTIONS AND AN ASIDE WITH THE PAYMENT METHOD */}

              <div className="cards-wrapper">
                {!noEvents && userEvents.map((event) => (
                  <Event key={event.id} {...event} />
                ))}
              </div>
              <Payment paymentValue={paymentValue} />
            </div>
          )
          : (
            <div className="cards-wrapper">
              {!noEvents && userEvents.map((event) => (
                <Event {...event} />
              ))}
            </div>
          )}
        {noEvents && setNoEventsMessage()}
      </section>
      <Footer />
    </>
  );
}

export default UserEventsHandler;
