import React from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw } from "@fortawesome/free-solid-svg-icons"


export default function Card() {

    const [villager, setVillager] = React.useState("");
    const [villagerInfo, setVillagerInfo] = React.useState({});

    const url = `https://api.nookipedia.com/villagers?game=NH&name=${villager}`;
    const header = {
        "X-API-KEY": process.env.REACT_APP_NOOKIPEDIA_API_KEY,
        "Accept-Version": "1.5.0"
    }

    // React.useEffect(() => {
    //     axios.get(url, {headers: header})
    //         .then(response => {
    //             setVillagerInfo(response.data)
    //             console.log(villagerInfo)
    //         })
    // }, [url])

    // function handleChange(event) {
    //     const {name, value} = event.target
    //     setVillager(prevVillager => ({
    //         ...prevVillager,
    //         [name]: value
    //     }))
    // }

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
            <p>{villagerInfo[0].name}</p>
        </div>
    )
}