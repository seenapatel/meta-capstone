import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom"
import React, { useEffect, useCallback, useReducer } from 'react';
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
// import { fetchAPI } from "../api";

function Main (){
    // API was being blocked so added it here
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };



  const initializeTimes = { availableTimes: fetchAPI(new Date()) };

  const[update, setUpdate] = useReducer(updateTimes, initializeTimes);
  
  function updateTimes(update, date){
    // console.log(date); //selected date
    // fetchTimes(date)
    return {availableTimes: fetchAPI(new Date(date))};
  };

  const navigate = useNavigate();

  function submitForm(formData){
    if (submitAPI(formData)){
        navigate("/confirmed")
    }else{
        alert("Booking failed")
    }
  };

    return(
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage availableTimes={update} updateTimes={setUpdate} submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
       
    );
}


export default Main;