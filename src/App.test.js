import { render, screen } from '@testing-library/react';
import {initializeTimes, updateTimes} from './App.js';
import App from './App.js';
import BookingForm from './components/BookingForm.js';
import { BrowserRouter } from 'react-router-dom';
// import {expect, jest} from '@jest/globals';

// jest.mock('react-router-dom', () => ({
//     BrowswerRouter: ({children}) => <div>{children}</div>,
//     Routes : ({children}) => <div>{children}</div>,
//     Route : ({children}) => <div>{children}</div>,
// }));

// test('renders App component', () => {
//   render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>);
// });

test('renders BookingForm button and labels', () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} updateTimes={() => {}}/>);
    const timesLabel = screen.getByText(/Choose Time/i);
    expect(timesLabel).toBeInTheDocument();

    const dateLabel = screen.getByText(/Choose Date/i);
    expect(dateLabel).toBeInTheDocument();

    const guestsLabel = screen.getByText(/Number of Guests/i);
    expect(guestsLabel).toBeInTheDocument();

    const occasionLabel = screen.getByText(/Occasion/i);
    expect(occasionLabel).toBeInTheDocument();

    const submitButton = screen.getByRole("button", {name: /submit/i});
    expect(submitButton).toBeInTheDocument();
});


test('renders inital times correctly', () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
    ]);
});

test('updates dates with  available times', () => {
    const mockUpdate = jest.fn();
    const mockUpdateTimes = updateTimes(mockUpdate);

    mockUpdateTimes("2024-06-13");

    expect(mockUpdate).toHaveBeenCalledWith({
        type: "update_times",
        payload: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    });
});