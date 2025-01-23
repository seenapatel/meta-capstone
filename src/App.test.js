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


test('renders initial times correctly', () => {
    render(<BookingForm />)
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
    render (<BookingForm/>)
    const mockUpdate = jest.fn();
    const mockUpdateTimes = updateTimes(mockUpdate);

    mockUpdateTimes("2024-06-13");

    expect(mockUpdate).toHaveBeenCalledWith({
        type: "update_times",
        payload: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    });
});

describe('BookingForm', () => {
    test('should have required attributes on the date input', () => {
        render(<BookingForm />);

        const dateInput = screen.getByLabelText(/Choose Date/i);
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('min');
        expect(dateInput).toHaveAttribute('required');
    });

    test('should have required and min/max attributes on guests input', () => {
        render(<BookingForm />);

        const guestsInput = screen.getByLabelText(/Number of Guests/i);
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
        expect(guestsInput).toHaveAttribute('required');
    });

    test('should have required attribute on occasion select', () => {
        render(<BookingForm />);

        const occasionSelect = screen.getByLabelText(/Occasion/i);
        expect(occasionSelect).toHaveAttribute('required');
    });

    test('should have required attribute on time select', () => {
        render(<BookingForm />);

        const timeSelect = screen.getByLabelText(/Choose Time/i);
        expect(timeSelect).toHaveAttribute('required');
    });
});