import React, { useEffect, useState } from 'react';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import api from '../../services/api';
import { useStateValue } from '../../services/StateProvider';
import './EventInfo.css';
import Sidebar from '../../components/Sidebar';

function EventInfo({ history }) {
  const [{ user, isSidebarOpen }, dispatch] = useStateValue();
  const [event, setEvent] = useState({});
  const [isSubscribed, setSubscribedStatus] = useState(false);
  const URL = window.location.pathname;

  const getEvents = async () => {
    // URL is -> /event/:eventId wher eventId is the id of the Event when a user clicks it
    const response = await api.get(URL);
    const event = response.data || [];
    setEvent(event);
    setSubscribedStatus(event.usersSubscribed.includes(user));
  };

  useEffect(() => {
    getEvents();
    // If at some point the user log outs we change the subscription status to false
    setSubscribedStatus(false);
    // eslint-disable-next-line
  },[]);

  const handleSubscribeEvent = async () => {
    if (!user) {
      return history.push('/login');
    }
    if (isSubscribed) {
      // The user is subscribed! Let's unsubscribe the user
      // Let's unsubscribe the user from the event on the backend
      const response = await api.post(`${URL}/unsubscribe`, {}, { headers: { user } });
      response.data ? setSubscribedStatus(false) : alert('Could not unsubscribe, Ops!');
    } else {
      // THe user is not subscribed let's add it into the event
      const response = await api.post(`${URL}/subscribe`, {}, { headers: { user } });
      if (response) {
        // The user is now subscribed
        setSubscribedStatus(true);
      } else {
        alert('Ops! Something went wrong!');
      }
    }
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggle={() => dispatch({ type: 'TOGGLE_SIDEBAR' })} />
      <Navbar toggle={() => dispatch({ type: 'TOGGLE_SIDEBAR' })} />
      <HeroSection />
      <section id="event" className="container">
        <h2>Event</h2>
        {event && (
          <div id="event" className="event">
            <img src={event.thumbnail_url} alt="Sport event illustration" />
            <div clas="event__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p className="event__details">
                <strong>
                  $
                  {event.price}
                </strong>
                <span>{event.sport}</span>
              </p>
              <button className="btn primary" onClick={handleSubscribeEvent}>{isSubscribed ? 'Unsubscribe' : 'Subscribe' }</button>

            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default EventInfo;
