import React from "react"
import Location from "../images/location.png"
import Service from "../images/service.png"


export default function Header() {
    
    const [timeState, setTimeState] = React.useState(new Date())

    React.useEffect(() => {
        setInterval(() => setTimeState(new Date()), 30000);
    }, []);
    
    return (
        <div className="header">
            <nav>
                <img src= {Service} alt="Location pin" className="header--nav-service" />
                <p className="header--nav-time">
                    {timeState.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    })}
                </p>
                <img src= {Location} alt="Location pin" className="header--nav-location" />
            </nav>
            <h1>Villager Wiki</h1>
        </div>
    )
}