import React, { useState } from 'react';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import './components/styles.css'

function App() {
  const [activeTab, setActiveTab] = useState('form');
  const [events, setEvents] = useState([]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    setActiveTab('list');
  };

  return (
    <div className="container">
      <div className="tab-container">
        <button
          className={`tab-btn ${activeTab === 'form' ? 'active' : ''}`}
          onClick={() => setActiveTab('form')}
        >
          Add Event
        </button>
        <button
          className={`tab-btn ${activeTab === 'list' ? 'active' : ''}`}
          onClick={() => setActiveTab('list')}
        >
          Event List
        </button>
      </div>

      <div className={`tab-content ${activeTab === 'form' ? 'active' : ''}`}>
        <EventForm onAddEvent={handleAddEvent} />
      </div>

      <div className={`tab-content ${activeTab === 'list' ? 'active' : ''}`}>
        <EventList events={events} />
      </div>
    </div>
  );
}

export default App;
