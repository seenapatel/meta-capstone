import React, {useEffect } from "react";
import { useState } from "react";
// import App from "App.js";

function BookingForm(props) {

    const[guests, setGuests] = useState("");
    const[date, setDate] = useState("");
    const[times, setTimes] = useState("");
    const[occasion, setOccasion] = useState("");

    // const formatDate = (date) => { 
    //     const dateObj = new Date(date);
    //     const month = String(dateObj.getMonth() + 1).padStart(2, '0'); //get month with a 0 in front
    //     const day = String(dateObj.getDate()).padStart(2, '0'); //get day with a 0 in front
    //     const year = dateObj.getFullYear();
    //     return `${month}-${day}-${year}`;
    // }

    // const convertToAPIFormat = (date) => {
    //     const [month, day, year] = date.split("-");
    //     return `${year}-${month}-${day}`; //convert date to YYYY-MM-DD
    // }

//    useEffect(() => {
//     if (date) {
//         console.log("Updating times for", date);
//         updateTimes(date);
//         }
//     }, [date, updateTimes]);

//     useEffect(() => {
//         console.log("Times have been updated", availableTimes);
//     }, [availableTimes]);

    // const availableTimes = props.availableTimes;

    const handleChange = (e) => {
        setDate(e);
        props.updateTimes(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    //initialize date to current date format
    // useEffect(() => {
    //     const today = new Date();
    //     const formattedDate = formatDate(today);
    //     setDate(formattedDate);
    // }, []);

    return(
        <form 
            className="bookingForm" 
            onSubmit={handleSubmit}
            style= {{
                    display: "grid",
                    maxWidth: "200px",
                    gap: "20px"
                    }}
        >
            
            <h1>Book Now</h1>

            <label htmlFor="res-date">Choose Date</label>
            <input
                type="date"
                id="res-date"
                value={date} 
                onChange={e => handleChange(e.target.value)} //convert date to user format
                required
            />

            <label htmlFor="res-time">Choose Time</label>
            <select
                id="res-time "
                value={times}
                onChange={e => setTimes(e.target.value)}
                required
            >
                <option value="">Select a Time</option>

                {props.availableTimes.availableTimes.map((availableTimes => {return <option key={availableTimes} value={availableTimes}>{availableTimes}</option>}))}

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
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion"
                value={occasion}
                onChange={e => setOccasion(e.target.value)}
                required
            >
                <option selected>Select an Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input 
                type="submit" 
                value="Make Your Reservation"
                style={{
                    backgroundColor: "yellow",
                    color: "black",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer",
                  }}
            />
        </form>
    )
}

export default BookingForm;