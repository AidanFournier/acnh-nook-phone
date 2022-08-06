import React from "react"

import SheepishIcon from "../images/sheepish-icon.png"
import ACNHLogo from "../images/animal-crossing-logo.png"

export default function Error() {
    return (
        <div className="error-page">
            <img src={SheepishIcon} className="character-icon" alt="Sheepish icon"/>
            <h2>Uh oh!</h2>
            <p>Villager not found. Check your spelling and try again!</p>
            <img src= {ACNHLogo} alt="Animal Crossing official logo" className="acnh-logo" />
        </div>
    )
}