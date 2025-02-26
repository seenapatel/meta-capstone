// import React from "react";
import food from "../images/restaurantfood.jpg"
import {Link} from "react-router-dom";

function CallToAction(){
    return(
        <article className="intro" id="grid">
            <h1 className="sec1">Little Lemon</h1>
            <h2 className="sec1">Chicago</h2>
            <p className="sec1">We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button type="button" className="sec1" aria-label="Reserve a Table"><Link className="reserveButton" to="/booking"><a>Reserve a Table</a></Link></button>
            <div id="foodPlatter">
                <img src={food} alt="food platter" id="foodPlatter"/>
            </div>
            <div className="empty">
                <br></br>
            </div>
        </article>
    )
}

export default CallToAction;