import React, { useState } from 'react';
import './BookingForm.css';
export const BookingForm = (props) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data
    // console.log('Date:', date);
    // console.log('Time:', time);
    // console.log('Number of Guests:', guests);
    // console.log('Occasion:', occasion);
    let data = {
      date,
      time,
      guests,
      occasion
    }
    props.onHandleSubmit(data);
    // Reset the form
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="form-label">
        Date:
        <input
          className="form-input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}

        />
      </label>
      <br />
      <label className="form-label">
        Time:
        <select value={time} className="form-input" onChange={(e) => setTime(e.target.value)}>
          <option value="">Select a time</option>
          {props?.availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
          {/* Add more time options as needed */}
        </select>
      </label>
      <br />
      <label className="form-label">
        Number of Guests:
        <input
          className="form-input"
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="1"
          min="1"
          max="10"
        />
      </label>
      <br />
      <label className="form-label">
        Occasion:
        <select className="form-input" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Wedding">Wedding</option>
          {/* Add more occasion options as needed */}
        </select>
      </label>
      <br />
      <button className='submit-button' type="submit">Submit</button>
    </form>
  );
};

