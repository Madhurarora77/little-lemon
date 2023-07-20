import { initializeTimes, Booking } from '../components/Booking';
import { render } from '@testing-library/react';

describe('initializeTimes', () => {
  it('returns the correct initial available times', () => {
    // Define the expected result
    render(<Booking />);
    const expectedTimes = ['09:00 AM', '12:00 PM', '03:00 PM', '06:00 PM'];

    // Call the function to get the actual result
    const actualTimes = initializeTimes();

    expect(actualTimes).toEqual(expectedTimes);
  });

  // Add more test cases if needed to cover different scenarios
});
