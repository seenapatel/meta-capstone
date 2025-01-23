import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import React, { useEffect, useCallback, useReducer } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import "./App.css";

function App() {
  return(
    <div className='App'>
        <Header />
        <Nav />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
