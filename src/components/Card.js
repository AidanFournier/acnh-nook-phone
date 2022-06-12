import React from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw } from "@fortawesome/free-solid-svg-icons"
import WoodSign from "../images/wood-sign.png"


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
                        {villagerInfo ? <p>{villagerInfo[0].birthday_month}</p> : null}
                        {villagerInfo ? <p>{villagerInfo[0].birthday_day}</p> : null}
                        {villagerInfo ? <p>{villagerInfo[0].sign}</p> : null}
                    </div>
                    
                </div>
            }


        </div>
    )
}