import React from "react"
import axios from "axios"

import Header from "./components/Header"
import Card from "./components/Card"
import Form from "./components/Form"

export default function App() {

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
    <div className="main">
      <h1>Nook Phone</h1>
      <div className="phone">
        <Header />
        <Form 
          value={villager}
          handleChange={event => setVillager(event.target.value)}
          handleClick={searchVillager}
        />
        {/* <Card /> */}
      </div>
    </div>
  );
}
