// import React from "react";
import logo from '../images/Logo.svg'
import { Outlet } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import Chicago from "../components/Chicago.js";
import CustomersSay from "../components/CustomersSay.js";

function Homepage(){
    return(
        //  <header>
        //     <meta name="description" content="Little Lemon Homepage"/>
        //     <meta name="og:title" content="Little Lemon Restaurant"/>
        //     <meta name="og:description" content="Little Lemon Restaurant is a family-owned Mediterranean restaurant with a variety of options."/>
        //     <meta name="og:image" content={logo}/>
        //     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        // </header>
        <div>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
        </div>
    );
    // <Outlet />
}

export default Homepage;

