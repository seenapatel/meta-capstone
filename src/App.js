import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useCallback, useReducer } from 'react';
// import { useState } from "react";
import Header from './components/Header';
import Nav from './components/Nav';
// import Main from './components/Main';
import Footer from './components/Footer';
import "./App.css";
import BookingPage from './components/BookingPage.js';
import BookingForm from './components/BookingForm.js';
// import CallToAction from "./components/CallToAction.js";
import Homepage from './components/Homepage.js';
// import Specials from "./components/Specials.js";
// import Chicago from "./components/Chicago.js";
// import CustomersSay from "./components/CustomersSay.js";


function timeReducer(update, action){
  switch (action.type) {
    case "update_times":
      return {...update, availableTimes: action.payload};
    case "initialize_times":
      return {...update, availableTimes: action.payload};
    default:
      return update;
    }
}

function App() {
  
  const initialTimes = () => {
    // Returns initial times modify to fetch from API
    return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]};

  const initializeTimes = { availableTimes: initialTimes() };

  const[update, setUpdate] = useReducer(timeReducer, initializeTimes);
  
  // function initializeTimes(){
  // //returns inital times
  //   return{(
  //     {initialTimes.map((time, index) =>   
  //       <option key={index} value={time}>{time}</option>
  //     )}
  //   )}
  // };
  

  // function initializeTimes() {
  //   // Returns initial times
  //   return (
  //       {initialTimes.map(time => (
  //           {time}
  //       ))}
  //   );
  // }

  // function timeReducer(update, action){
  //     switch (action.type) {
  //       case "update_times":
  //         return {...update, times: action.payload};
  //   }
  // }  
    
 

  const updateTimes = useCallback((date) => {
    console.log(date); //selected date
    const updatedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ];
    setUpdate({type: "update_times", payload: updateTimes});
  }, []);

 

  return(
    <div className='App'>
      <Header />
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage availableTimes={update.availableTimes} updateTimes={updateTimes}/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
