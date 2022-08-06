import React from "react"

import OopsIcon from "../images/oops-icon.png"
import ACNHLogo from "../images/animal-crossing-logo.png"

export default function Error() {
    return (
        <div className="error-page">
            <img src={OopsIcon} className="character-icon" alt="Oops icon"/>
            <h2>Uh oh!</h2>
            <p>Villager not found. Check your spelling and try again!</p>
            <img src= {ACNHLogo} alt="Animal Crossing official logo" className="acnh-logo" />
        </div>
    )
}