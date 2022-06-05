import React from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw } from "@fortawesome/free-solid-svg-icons"


export default function Card() {

    const [villager, setVillager] = React.useState("")

    const [allVillagers, setAllVillagers] = React.useState([])

    const externalUrl = "https://api.nookipedia.com/villagers?game=NH";
    const header = {
        "X-API-KEY": process.env.REACT_APP_NOOKIPEDIA_API_KEY,
        "Accept-Version": "1.5.0"
    }

    React.useEffect(() => {
        axios.get(externalUrl, {headers: header})
            .then(response => {
                setAllVillagers(response.data)
                console.log(response)
            })
    }, [externalUrl])
    
    // .then(res => res.json())
    //         .then(data => setAllVillagers(data))

    function handleChange(event) {
        const {name, value} = event.target
        setVillager(prevVillager => ({
            ...prevVillager,
            [name]: value
        }))
    }

    return (
        <div className="card">
            <div className="form">
                <input 
                    type="text"
                    placeholder="Villager's name"
                    className="form--input"
                    name="name"
                    value={villager.name}
                    onChange={handleChange}
                />
                <button 
                    className="form--button">
                        <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    )
}