import React, { useState } from 'react';

const EventForm = ({ onAddEvent }) => {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleAddEvent = () => {
    const newEvent = {
      title,
      startDate: `${startDate} ${startTime}`,
      endDate: `${endDate} ${endTime}`,
      location,
      description,
    };
    onAddEvent(newEvent);
    // Clear input fields after adding event
    setTitle('');
    setStartDate('');
    setStartTime('');
    setEndDate('');
    setEndTime('');
    setLocation('');
    setDescription('');
  };

  return (
    <div className="form-container">
      <h2>Add Event</h2>
      <div className="form-item">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div style={{display:'flex'}}>
        <div className="form-item">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>Start Time:</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
      </div>
      <div style={{display:'flex'}}>
        <div className="form-item">
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label>End Time:</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>
      <div className="form-item">
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="form-item">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
};

export default EventForm;
