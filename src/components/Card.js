import React from "react"

import Cake from "../images/cake.png"
import TextBubble from "../images/text-bubble.png"

export default function Card(props) {

    function getDaySuffix(num) {
        var array = ("" + num).split("").reverse(); // E.g. 123 = array("3","2","1")
        
        if (array[1] !== "1") { // Number is not in the teens
            switch (array[0]) {
                case "1": return "st";
                case "2": return "nd";
                case "3": return "rd";
                default: return;
            }
        }
    
        return "th";
    }

    return (
         <div className="card">
             <div className="villager--type">
                <div className="villager--personality">
                    <h3>Personality</h3>
                    <p>{props.villagerPersonality}</p>
                </div>
                <div className="villager--species">
                    <h3>Species</h3>
                    <p>{props.villagerSpecies}</p>
                </div>
            </div>
            <div className="villager--birthday">
                <img src= {Cake} alt="Bithday cake" className="cake" />
                <p>{props.villagerBirthdayMonth}</p>
                <p>{props.villagerBirthdayDay}{getDaySuffix(props.villagerBirthdayDay)}</p>
            </div>
            <div className="bottom-stats">
                <div className="villager--quote-bubble">
                    <div>
                        <img src= {TextBubble} alt="Text bubble" className="text-bubble"/>
                    </div>
                    <p>{props.catchphrase}</p>
                </div>
                <div className="villager--hobby">
                    <h4>Hobby</h4>
                    <p>{props.hobby} </p>
                </div>
            </div>
         </div>     
    )
}