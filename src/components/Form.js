import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw } from "@fortawesome/free-solid-svg-icons"

export default function Form(props) {
    return (
        <div className="form">
            <input 
                type="text"
                placeholder="Villager's name"
                className="form--input"
                name="villager"
                value={props.value}
                onChange={props.handleChange}
            />
            <button 
                className="form--button"
                onClick={props.handleClick}>
                    <FontAwesomeIcon icon={faPaw}></FontAwesomeIcon>
            </button>
        </div>
    )
}