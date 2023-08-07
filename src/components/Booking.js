import React, { useReducer } from 'react';
import { BookingForm } from './BookingForm';
import { submitAPI } from '../Api';
import { useNavigate } from 'react-router-dom';
const timeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_AVAILABLE_TIMES':
      return state;
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
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(timeReducer, initializeTimes());
  // const [date, setDate] = useState(currentDate);

  // useEffect(() => {
  //   // const fetchDate = async () => {
  //   //   try {
  //   //     const response = await fetchAPI(date); // Replace 'your-api-url' with the actual API endpoint
  //   //     if (!response.ok) {
  //   //       throw new Error('Network response was not ok');
  //   //     }
  //   //     const data = await response.json();
  //   //     console.log(data,"AMDHUR"); // Update the state with the fetched data
  //   //   } catch (error) {
  //   //     console.error('Error fetching data:', error);
  //   //   }
  //   // }
  //   console.log(date, 'Madhur');
  //   const data = fetchAPI(date);
  //   console.log(data, 'ARORA');
  // }, [date])

  const updateTimes = (formData) => {
    // Perform any necessary actions with the form data
    // console.log('M:', formData.date);
    // console.log('M:', formData.time);
    // console.log('M:', formData.guests);
    // console.log('M:', formData.occasion);
    // setAvailableTimes(availableTimes.filter((el) => {
    //   el !== formData.time
    // }))
    let responseSubmit = submitAPI(formData);
    if (responseSubmit) {
      navigate('/BookingConfirmed');
    }
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