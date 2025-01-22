// import React from "react";
import rhea from "../images/RheaPersona.jpg"
import rate from "../images/rating.png"
import mike from "../images/Mike.jpg"
import craig from "../images/Craig.jpeg"
import emily from "../images/Emily.jpeg"

function CustomersSay (){
    return(
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
    )
}

export default CustomersSay;