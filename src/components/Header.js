import React from "react"

export default function Header() {
    return (
        <div className="header">
            <nav>
                <div className="header--nav-service"></div>
                <div className="header--nav-time">1:00 PM</div>
                <div className="header--nav-location"></div>
            </nav>
            <h1>Villager Wiki</h1>
        </div>
    )
}