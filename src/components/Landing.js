import React from "react"

import ACNHLogo from "../images/animal-crossing-logo.png"
import curlyArrow from "../images/curly-arrow.png"

export default function Landing() {
    return (
        <div className="landing">
            <img src= {curlyArrow} alt="Curly arrow" className="curly-arrow" />
            <h4>Welcome to NookPhone, a Villager Wiki to assist your ACNH gameplay. </h4>
            <p>To get started, type a villager's name above and tap the paw.</p>
            <img src= {ACNHLogo} alt="Animal Crossing official logo" className="acnh-logo" />
        </div>
    );
};