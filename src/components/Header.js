import React from "react"
import Location from "../images/location.png"


export default function Header() {
    
    
    
    return (
        <div className="header">
            <nav>
                <div className="header--nav-service"></div>
                <div className="header--nav-time">1:00 PM</div>

                    <img src= {Location} alt="Location pin" className="header--nav-location" />
               
            </nav>
            <h1>Villager Wiki</h1>
        </div>
    )
}