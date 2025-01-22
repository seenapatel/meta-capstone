import React, { useEffect } from "react";
import { useState } from "react";
// import App from "App.js";

function BookingForm({availableTimes, updateTimes}) {

    // const[field, setField] = useState("");
    // const[time, setTime] = useState("");
    const[guests, setGuests] = useState("");
    const[date, setDate] = useState("");
    const[times, setTimes] = useState("");
    const[occasion, setOccasion] = useState("");

   useEffect(() => {
    if (date) {
        updateTimes(date);
        }
    }, [date, updateTimes]);

    const handleSubmit = (e) => {
        console.log("Reservation Successful!");
    }

    return(
        <form className="bookingForm" 
        onSubmit={handleSubmit}
        style= {{display: "grid",
                 maxWidth: "200px",
                 gap: "20px"}}>
            
            {/* <h1>Book Now</h1> */}

            <label htmlFor="res-date">Choose Date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            <label htmlFor="res-time">Choose Time</label>
            <select
                id="res-time "
                value={times}
                onChange={e => setTimes(e.target.value)}
            >
                <option value="">Select a Time</option>
                    {Array.isArray(availableTimes) && availableTimes.length > 0 ?(
                        availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))
                    ) : (
                        <option>No times available</option>
                )}   
            </select>    

            <label htmlFor="guests">Number of Guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                value={guests}
                onChange={e => setGuests(e.target.value)}
            />

            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion"
                value={occasion}
                onChange={e => setOccasion(e.target.value)}
            >
                <option selected>Select an Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button type="submit" value="Make Your Reservation" />
        </form>
    )
}

export default BookingForm;