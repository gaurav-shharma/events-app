import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="list-container">
      <h2>Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h3>{event.title}</h3>
            <p>Start: {event.startDate}</p>
            <p>End: {event.endDate}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
