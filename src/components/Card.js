import React from "react"
import axios from "axios"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw } from "@fortawesome/free-solid-svg-icons"

import WoodSign from "../images/wood-sign.png"
import Cake from "../images/cake.png"
import TextBubble from "../images/text-bubble.png"


export default function Card() {

    const [villager, setVillager] = React.useState("");
    const [villagerInfo, setVillagerInfo] = React.useState({});

    const url = `https://api.nookipedia.com/villagers?game=NH&nhdetails=true&name=${villager}`;
    const header = {
        "X-API-KEY": process.env.REACT_APP_NOOKIPEDIA_API_KEY,
        "Accept-Version": "1.5.0"
    }

    function searchVillager(e) {
        e.preventDefault();
        
        axios.get(url, {headers: header})
            .then(response => {
                setVillagerInfo(response.data)
                console.log(response.data)
            })
            
            setVillager('')
    }

    function getDaySuffix(num) {
        var array = ("" + num).split("").reverse(); // E.g. 123 = array("3","2","1")
        
        if (array[1] !== "1") { // Number is not in the teens
            switch (array[0]) {
                case "1": return "st";
                case "2": return "nd";
                case "3": return "rd";
            }
        }
    
        return "th";
    }

    return (
        <div className="card">
            <div className="form">
                <input 
                    type="text"
                    placeholder="Villager's name"
                    className="form--input"
                    name="villager"
                    value={villager}
                    onChange={event => setVillager(event.target.value)}
                />
                <button 
                    className="form--button"
                    onClick={searchVillager}>
                        <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
                </button>
            </div>

            {villagerInfo[0] !== undefined &&
                <div className="villager--results">
                    <div className="polaroid-picture">
                        {villagerInfo[0] ? <img src={`${villagerInfo[0].image_url}`} className="villager--image" alt="Villager"/> : null}
                        <img src= {WoodSign} alt="Wooden sign" className="wooden-sign" />
                        <div className="villager--name">
                            {villagerInfo ? <h2>{villagerInfo[0].name}</h2> : null}
                        </div>
                    </div>
                    <div className="villager--stats">
                        <div className="villager--type">
                            <div className="villager--personality">
                                <h3>Personality</h3>
                                {villagerInfo ? <p>{villagerInfo[0].personality.toLowerCase()}</p> : null}
                            </div>
                            <div className="villager--species">
                                <h3>Species</h3>
                                {villagerInfo ? <p>{villagerInfo[0].species.toLowerCase()}</p> : null}
                            </div>
                        </div>
                    </div>
                    <div className="villager--birthday">
                        <img src= {Cake} alt="Bithday cake" className="cake" />
                        {villagerInfo ? <p>{villagerInfo[0].birthday_month}</p> : null}
                        {villagerInfo ? <p>{villagerInfo[0].birthday_day}{getDaySuffix(villagerInfo[0].birthday_day)}</p> : null}
                    </div>
                    <div className="bottom-stats">
                        <div className="villager--quote-bubble">
                            <div>
                                <img src= {TextBubble} alt="Text bubble" className="text-bubble"/>
                            </div>
                            {villagerInfo ? <p>{villagerInfo[0].nh_details.catchphrase}</p> : null}
                        </div>
                        <div className="villager--hobby">
                            <h4>Hobby</h4>
                            {villagerInfo ? <p>{villagerInfo[0].nh_details.hobby} </p> : null}
                        </div>
                    </div>
                    <div className="next-picture">
                    {villagerInfo[0] ? <img src={`${villagerInfo[0].nh_details.house_exterior_url}`} className="villager--image" alt="Villager"/> : null}
                    </div>


                </div>
            }


        </div>
    )
}