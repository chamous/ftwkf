import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, ImageCard, CardDescription } from './EventElements';
import { useStateValue } from '../../services/StateProvider';
import api from '../../services/api.js';
import './Event.css';

function Event({
  thumbnail_url, title, description, price, sport, id, user,
}) {
  const stateValue = useStateValue();
  const history = useHistory();

  const handleDelete = (e) => {
    e.stopPropagation();
    try {
      api.delete(`/event/${id}`).then(() => {
        alert('Event deleted successfully');
        history.go('/dashboard');
      });
    } catch (error) {
      alert('Error when deleting the event');
    }
  };
  const pushToEventPage = (url) => {
    history.push(url);
  };
  return (
    <Card onClick={() => { pushToEventPage(`/event/${id}`); }}>
      {user === stateValue[0].user && (<button className="btn primary card__delete-btn" onClick={handleDelete}>Delete</button>)}
      <ImageCard src={thumbnail_url} />
      <CardDescription>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">
          {description.split('', 50).join('')}
          ...
        </p>
        <p className="card__details">
          <strong>
            $
            {price}
            .00
          </strong>
          <span>{sport}</span>
        </p>
      </CardDescription>
    </Card>
  );
}

export default Event;
