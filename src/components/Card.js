import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw } from "@fortawesome/free-solid-svg-icons"


export default function Card() {

    return (
        <div className="card">
            <div className="form">
                <input 
                    type="text"
                    placeholder="Villager's name"
                    className="form--input"
                    name="name"
                />
                <button 
                    className="form--button">
                        <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    )
}