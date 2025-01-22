// import React from "react";
import BookingForm from "./BookingForm.js";

function BookingPage({availableTimes, updateTimes}){
    return(
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>
    )
}

export default BookingPage;