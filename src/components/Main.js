import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import styles from '../App.css';
import BookingForm from "./BookingForm.js";
import BookingPage from "../components/BookingPage.js"
import CallToAction from "../components/CallToAction.js"
import Homepage from "../components/Homepage.js"
import Specials from "../components/Specials.js"
import Chicago from "../components/Chicago.js"
import CustomersSay from "../components/CustomersSay.js"
import Nav from "../components/Nav.js"
import rhea from "../images/RheaPersona.jpg"
import rate from "../images/rating.png"
import mike from "../images/Mike.jpg"
import craig from "../images/Craig.jpeg"
import emily from "../images/Emily.jpeg"
import greekSalad from "../images/greeksalad.jpg"
import bruschetta from "../images/bruchetta.svg"
import lemonDessert from "../images/lemondessert.jpg"
import bro1 from "../images/MarioandAdrianA.jpg"
import bro2 from "../images/MarioandAdrianb.jpg"
import bike from "../images/bike.png"
import food from "../images/restaurantfood.jpg"

function Main (){

    // <Routes>
    //     <Route path="/" element={<Homepage />} >
    //         <Route path="/nav" element={<Nav />} />
    //         <Route path="/cta" element={<CallToAction />} />
    //         <Route path="/specials" element={<Specials />} />
    //         <Route path="/say" element={<CustomersSay />} />
    //         <Route path="/chicago" element={<Chicago />} />
    //         <Route path="/booking" element={<BookingForm />} />
    //     </Route>
    // </Routes>

    // return(
    /*  <main className="main">

            <article className="intro" id="grid">
                    <h1 className="sec1">Little Lemon</h1>
                    <h2 className="sec1">Chicago</h2>
                    <p className="sec1">We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    
                        <button className="sec1" type="button"><a>Reserve a Table</a></button>
                   
                <div id="foodPlatter">
                    <img src={food} alt="food platter" id="foodPlatter"/>
                </div>
                <div className="empty">
                    <br></br>
                </div>
            </article>

            <div className="specials" id="grid">
                <h1 className="sec2">This Week's Specials!</h1>
                <button type="button">Online Menu</button>

                <div className="specialsCards">
                    <div className="foodCard" id="greekSalad">
                        <div id='specialsFood'>
                            <img src={greekSalad} alt="greek salad" id="specialsFood"/>
                        </div>
                        <h6>Greek Salad</h6>
                        <p id="price">$12.99</p>
                        <p id="foodDes">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta chesse. Garnished with crunchy garlic and rosemary croutons.</p>
                        <p id="delivery">Order a delivery</p>
                        <img src={bike} alt="delivery bike" id="bike"/>
                    </div>
                    <div className="foodCard" id="bruschetta">
                        <div id='specialsFood'>
                            <img src={bruschetta} alt="bruschetta" id="specialsFood"/>
                        </div>
                        <h6>Bruschetta</h6>
                        <p id="price">$5.99</p>
                        <p id="foodDes">Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <p id="delivery">Order a delivery</p>
                        <img src={bike} alt="delivery bike" id="bike"/>
                    </div>
                    <div className="foodCard" id="lemonDessert">
                        <div id='specialsFood'>
                            <img src={lemonDessert} alt="lemon dessert" id="specialsFood" className="lemonDessert"/>
                        </div>
                        <h6>Lemon Dessert</h6>
                        <p id="price">$5.00</p>
                        <p id="foodDes">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <p id="delivery">Order a delivery</p>
                        <img src={bike} alt="delivery bike" id="bike"/>
                    </div>
                </div>
            </div>
            <div className="testimonials" id="grid">
                <h1>Testimonials</h1>
                <div className="rateCard" id="rhea">
                    <img src={rate} alt="star rating" id="rate"/>
                    <div id="pfp">
                        <img src={rhea} alt="rhea icon" id="pfp"/>
                    </div>
                    <h6>Rhea</h6>
                    <p>"Seriously cannot stop thinking about the Turkish Mac 'n Cheese!"</p>
                </div>
                <div className="rateCard" id="craig">
                    <img src={rate} alt="star rating" id="rate"/>
                    <div id="pfp">
                        <img src={craig} alt="craig icon" id="pfp"/>
                    </div>
                    <h6>Craig</h6>
                    <p>"We had such a great tme celebrating my granny's birthday!"</p>
                </div>
                <div className="rateCard" id="mike">
                    <img src={rate} alt="star rating" id="rate"/>
                    <div id="pfp">
                        <img src={mike} alt="mike icon" id="pfp"/>
                    </div>
                    <h6>Mike</h6>
                    <p>"Best Feta Salad in town. Flawless everytime!"</p>
                </div>
                <div className="rateCard" id="emily">
                    <img src={rate} alt="star rating" id="rate"/>
                    <div id="pfp">
                        <img src={emily} alt="emily icon" id="pfp"/>
                    </div>
                    <h6>Emily</h6>
                    <p>"Such a chilled out atmosphere - love it!"</p>
                </div>
            </div>
            <article className="about" id="grid">
                <h1 className="sec5">Little Lemon</h1>
                <h2 className="sec5">Chicago</h2>
                <p className="sec5">Little Lemon restaurant is based out of Chicago, Illinois. It was founded by brothers Mario and Adrian in an effort to share their grandmother’s recipes with the world. The cuisine can be described as a modern take on Mediterranean food that will quickly become your new favorite meal. Please come in as we are open Monday - Sunday 9am-9pm. Come experience grandma’s recipes today. We also deliver!</p>
                <div className="bro2">
                    <img src={bro2} alt="mario and adrian 2" className="bro2"/>
                </div>
                <div className="bro1">
                    <img src={bro1} alt="mario and adrian 1" className="bro1"/>
                </div>
            </article>
        </main> */
    // ) 
}


export default Main;