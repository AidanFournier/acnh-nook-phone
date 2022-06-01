import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw } from "@fortawesome/free-solid-svg-icons"


export default function Card() {

    const [villager, setVillager] = React.useState("")

    const [allVillagers, setAllVillagers] = React.useState([])

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