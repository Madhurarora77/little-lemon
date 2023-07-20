import React, { useReducer } from 'react';
import { BookingForm } from './BookingForm';
const timeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_AVAILABLE_TIMES':
      return action.payload;
    default:
      return state;
  }
};
export const initializeTimes = () => {
  // Add your logic to generate the initial available times
  return [
    '09:00 AM',
    '12:00 PM',
    '03:00 PM',
    '06:00 PM',
  ];
};
export const Booking = () => {
  const [availableTimes, dispatch] = useReducer(timeReducer, initializeTimes());

  const updateTimes = (formData) => {
    // Perform any necessary actions with the form data
    console.log('M:', formData.date);
    console.log('M:', formData.time);
    console.log('M:', formData.guests);
    console.log('M:', formData.occasion);
    // setAvailableTimes(availableTimes.filter((el) => {
    //   el !== formData.time
    // }))
    dispatch({ type: 'SET_AVAILABLE_TIMES', payload: formData });
  };
  return (
    <>
      <BookingForm
        onHandleSubmit={updateTimes}
        availableTimes={availableTimes}
      />
    </>
  );
}