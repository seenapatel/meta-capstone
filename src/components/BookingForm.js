import React, {useEffect, formReducer, combineReducers } from "react";
import { useState } from "react";
// import App from "App.js";

function BookingForm(props) {

    const[guests, setGuests] = useState("");
    const[date, setDate] = useState("");
    const[times, setTimes] = useState("");
    const[occasion, setOccasion] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({
        date: "",
        times: "",
        guests: "",
        occasion: "",
    });

    // Get today's date for the minimum date validation
    const today = new Date().toISOString().split("T")[0];

    // Reset form on page load (if required)
    useEffect(() => {
        setGuests("");
        setDate("");
        setTimes("");
        setOccasion("");
        setErrors({
            date: "",
            times: "",
            guests: "",
            occasion: "",
        });
        setIsFormValid(false);
    }, []); // Empty array ensures this only runs on mount (refresh)

    // Validation Function
    const validateForm = () => {
        const newErrors = {};

        if (!date) {
            newErrors.date = "Please choose a date.";
        } else if (date < today) {
            newErrors.date = "Date cannot be in the past.";
        }

        if (!times) {
            newErrors.times = "Please select a time.";
        }

        if (!guests || guests <= 1 || guests >= 10) {
            newErrors.guests = "Number of guests must be between 1 and 10.";
        }

        if (!occasion) {
            newErrors.occasion = "Please select an occasion.";
        }

        setErrors(newErrors);

        // If there are no errors, form is valid
        setIsFormValid(
            !newErrors.date && !newErrors.times && !newErrors.guests && !newErrors.occasion
        );
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
        props.updateTimes(e.target.value);
        validateForm();
    }

    const handleTimesChange = (e) => {
        setTimes(e.target.value);
        validateForm();
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
        validateForm();
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
        validateForm();
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
        validateForm();
    }


    return(
    <React.Fragment> 
        <div className="formBody">
        <form 
            className="bookingForm" 
            onSubmit={handleSubmit}
            // style= {{
            //         display: "grid",
            //         maxWidth: "200px",
            //         gap: "20px"
            //         }}
        >
            

            <h1 id="book-now">Book Now</h1>

            <React.Fragment>
            <div className="date">
            <label htmlFor="res-date">Choose Date</label>
            <input
                className="inputs"
                type="date"
                id="res-date"
                value={date} 
                min={today} //minimum date is today
                onChange={handleDateChange} //convert date to user format
                required
            /> 
                 <br/>
                {errors.date && <span className="error">{errors.date}</span>}
           </div>
            </React.Fragment>
            
            <React.Fragment>
                <div className="time">
                    <label htmlFor="res-time">Choose Time</label>
                    <select
                        className="inputs"
                        id="res-time "
                        placeholder="Select a Time"
                        value={times}
                        onChange={handleTimesChange}
                        required
                    >
                        <option value="">Select a Time</option>
                        {props.availableTimes.availableTimes.map((availableTimes => {return <option key={availableTimes} value={availableTimes}>{availableTimes}</option>}))}

                    </select>   
                    <br/>
                    {errors.times && <span className="error">{errors.times}</span>}
                </div>
            </React.Fragment>

            <React.Fragment>
            <div className="guests">
            <label htmlFor="guests">Number of Guests</label>
            <input 
                className="inputs"
                type="number" 
                placeholder="0" 
                // min="1" 
                // max="10" 
                id="guests" 
                value={guests}
                onChange={handleGuestsChange}
                required
            />
                <br/>
                {errors.guests && <span className="error">{errors.guests}</span>}    
            </div>
            </React.Fragment>

            <React.Fragment>
                <div className="occasion">
                <label htmlFor="occasion">Occasion</label>
                <select 
                    className="inputs"
                    id="occasion"
                    placeholder="Select an Occasion"
                    value={occasion}
                    onChange={handleOccasionChange}
                    required
                >
                    <option value="">Select an Occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <br/>
                {errors.occasion && <span className="error">{errors.occasion}</span>}
                </div>
            </React.Fragment>

            <React.Fragment>
            <button 
                className="reserve"
                type="submit" 
                value="Make Your Reservation"
                // style={{
                //     backgroundColor: "yellow",
                //     color: "black",
                //     padding: "10px",
                //     border: "none",
                //     cursor: "pointer",
                //   }}
                disabled={!isFormValid}
                aria-label="Submit form"
                required
            >Reserve</button>
            </React.Fragment>
            
        </form>
        </div>
    </React.Fragment>
    )
}

export default BookingForm;