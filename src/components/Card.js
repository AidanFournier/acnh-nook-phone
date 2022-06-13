import React from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw } from "@fortawesome/free-solid-svg-icons"
import WoodSign from "../images/wood-sign.png"
import Cake from "../images/cake.png"
import Pisces from "../images/pisces.png"
import Cancer from "../images/cancer.png"
import Aries from "../images/aries.png"
import Aquarius from "../images/aquarius.png"
import Capricorn from "../images/capricorn.png"
import Libra from "../images/libra.png"
import Gemini from "../images/gemini.png"
import Leo from "../images/leo.png"
import Sagittarius from "../images/sagittarius.png"
import Taurus from "../images/taurus.png"
import Virgo from "../images/virgo.png"
import Scorpio from "../images/scorpio.png"
import QuoteBox from "../images/quote-box.png"



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

    function starSign(sign) {
        if (sign === "Pisces") {
           return <img src= {Pisces} alt="Pisces star sign" className="star-sign" />
        } else if (sign === "Cancer") {
            return <img src= {Cancer} alt="Cancer star sign" className="star-sign" />
        } else if (sign === "Aries") {
            return <img src= {Aries} alt="Aries star sign" className="star-sign" />
        } else if (sign === "Aquarius") {
            return <img src= {Aquarius} alt="Aquarius star sign" className="star-sign" />
        } else if (sign === "Capricorn") {
            return <img src= {Capricorn} alt="Capricorn star sign" className="star-sign" />
        } else if (sign === "Libra") {
            return <img src= {Libra} alt="Libra star sign" className="star-sign" />
        } else if (sign === "Gemini") {
            return <img src= {Gemini} alt="Gemini star sign" className="star-sign" />
        } else if (sign === "Leo") {
            return <img src= {Leo} alt="Leo star sign" className="star-sign" />
        } else if (sign === "Sagittarius") {
            return <img src= {Sagittarius} alt="Sagittarius star sign" className="star-sign" />
        } else if (sign === "Taurus") {
            return <img src= {Taurus} alt="Taurus star sign" className="star-sign" />
        } else if (sign === "Virgo") {
            return <img src= {Virgo} alt="Virgo star sign" className="star-sign" />
        } else if (sign === "Scorpio") {
            return <img src= {Scorpio} alt="Scorpio star sign" className="star-sign" />
        } else {
            return
        }
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
                        {villagerInfo ? <p>{villagerInfo[0].birthday_day}</p> : null}
                        {villagerInfo ? <p>{starSign(villagerInfo[0].sign)}</p> : null}
                    </div>
                    <div className="villager--quote-box">
                        <img src= {QuoteBox} alt="Quote bubble" className="quote-bubble" />
                    </div>


                </div>
            }


        </div>
    )
}