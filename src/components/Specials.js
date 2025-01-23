import React from "react";
import greekSalad from "../images/greeksalad.jpg"
import bruschetta from "../images/bruchetta.svg"
import lemonDessert from "../images/lemondessert.jpg"
import bike from "../images/bike.png"


function Specials () {
    return(
        <div className="specials" id="grid">
                <h1 className="sec2">This Week's Specials!</h1>
                <button aria-label="Online Menu">Online Menu</button>
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
    )
}

export default Specials;