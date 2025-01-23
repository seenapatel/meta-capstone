// import React from "react";
import BookingForm from "./BookingForm.js";

function BookingPage(props){
    return(
        <BookingForm availableTimes={props.availableTimes} updateTimes={props.updateTimes} submitForm={props.submitForm}/>
    )
}

export default BookingPage;