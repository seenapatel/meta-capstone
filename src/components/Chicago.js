// import React from "react";
import bro1 from "../images/MarioandAdrianA.jpg"
import bro2 from "../images/MarioandAdrianb.jpg"

function Chicago () {
    return(
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
    )
}

export default Chicago;