import React, { useState } from 'react';
import './BookingForm.css';
export const BookingForm = (props) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [dateError, setDateError] = useState('');
  const [guestsError, setGuestsError] = useState('');
  const [occasionError, setOccasionError] = useState('');
  const handleDateChange = (event) => {
    const value = event.target.value;
    setDate(value);
    if (!value) {
      setDateError('Please select a date');
    } else {
      setDateError('');
    }
  };

  const handleTimeChange = (event) => {
    const value = event.target.value;
    setTime(value);
  };

  const handleGuestsChange = (event) => {
    const value = event.target.value;
    setGuests(value);
    if (!value) {
      setGuestsError('Please enter the number of guests');
    } else if (!/^\d+$/.test(value) || parseInt(value) < 1) {
      setGuestsError('Number of guests must be a valid number and at least 1');
    } else {
      setGuestsError('');
    }
  };

  const handleOccasionChange = (event) => {
    const value = event.target.value;
    setOccasion(value);
    if (!value) {
      setOccasionError('Please select an occasion');
    } else {
      setOccasionError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data
    // console.log('Date:', date);
    // console.log('Time:', time);
    // console.log('Number of Guests:', guests);
    // console.log('Occasion:', occasion);
    // Validate the form


    let data = {
      date,
      time,
      guests,
      occasion
    }
    if (!date || !guests || !occasion || dateError || guestsError || occasionError) {
      alert('Please fill out the form correctly');
      return;
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
          onChange={handleDateChange}
          required
        />
        {dateError && <p className="error">{dateError}</p>}
      </label>
      <br />
      <label className="form-label">
        Time:
        <select value={time} className="form-input" onChange={handleTimeChange}>
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
          onChange={handleGuestsChange}
          placeholder="1"
          min="1"
          max="10"
        />
        {guestsError && <p className="error">{guestsError}</p>}
      </label>
      <br />
      <label className="form-label">
        Occasion:
        <select className="form-input" value={occasion} onChange={handleOccasionChange}>
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Wedding">Wedding</option>
          {/* Add more occasion options as needed */}
        </select>
        {occasionError && <p className="error">{occasionError}</p>}
      </label>
      <br />
      <button className='submit-button' type="submit" aria-label="submit " disabled={dateError || guestsError || occasionError}>Submit</button>
    </form>
  );
};

