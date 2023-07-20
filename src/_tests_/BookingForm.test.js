import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookingForm } from '../components/BookingForm';
const availableTimes = [
  '09:00 AM',
  '12:00 PM',
  '03:00 PM',
  '06:00 PM',
];
describe('BookingForm', () => {
  it('calls onSubmit prop with valid data when form is submitted', () => {
    const updateTimes = jest.fn();

    render(<BookingForm availableTimes={availableTimes} onHandleSubmit={updateTimes} />);

    // Fill in form fields
    userEvent.type(screen.getByLabelText(/Date/i), '2023-07-17');
    userEvent.type(screen.getByLabelText(/Time/i), '09:00 AM');
    userEvent.type(screen.getByLabelText(/Number of Guests/i), '2');
    userEvent.selectOptions(screen.getByLabelText(/Occasion/i), 'Birthday');

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    // Check if onSubmit prop function is called with the expected data
    expect(updateTimes).toHaveBeenCalledTimes(1);
    expect(updateTimes).toHaveBeenCalledWith({
      "date": '2023-07-17',
      "guests": "2",
      "occasion": "Birthday",
      "time": "",
    });
  });
});