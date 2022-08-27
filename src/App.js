import React from "react"
import axios from "axios"

import Header from "./components/Header"
import Form from "./components/Form"
import Carousel from "./components/Carousel"
import Card from "./components/Card"
import Landing from "./components/Landing"
import Error from "./components/Error"


export default function App() {

  const [villager, setVillager] = React.useState("");
  const [villagerInfo, setVillagerInfo] = React.useState({});

  const url = `https://api.nookipedia.com/villagers?game=NH&nhdetails=true&name=${villager}`;
  const header = {
      "X-API-KEY": process.env.REACT_APP_NOOKIPEDIA_API_KEY,
      "Accept-Version": "1.5.0",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"

  }

  const searchVillager = async () => {
    try {
      const response = await axios.get(url, {headers: header, mode: "cors", withCredentials: false});
      setVillagerInfo(response.data);
      console.log(response.data);
    } catch (err) {
      console.log('👹 ERROR: ' + err);
    };
  };

  React.useEffect(() => {
    searchVillager();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleResults(results) {
    if (results === 1) {
      return <Carousel 
            villagerInfo={villagerInfo[0]}
            image={villagerInfo[0].image_url}
            name={villagerInfo[0].name}
            exterior={villagerInfo[0].nh_details.house_exterior_url}
            interior={villagerInfo[0].nh_details.house_interior_url}
          />
    } else if (results === 0) {
      return <Error />
    } else {
      return <Landing />
    }
  };

  return (
    <div className="main">
      <h1 className="title">NookPhone</h1>
      <div className="phone">
        <Header />
        <Form 
          value = {villager}
          handleChange={event => setVillager(event.target.value)}
          handleClick={searchVillager}
        />
        {handleResults(villagerInfo.length)}
        {villagerInfo.length === 1 ? 
          (<Card 
            villagerInfo={villagerInfo[0]}
            personality={villagerInfo[0].personality}
            species={villagerInfo[0].species}
            birthdMonth={villagerInfo[0].birthday_month}
            birthDay={villagerInfo[0].birthday_day}
            catchphrase={villagerInfo[0].nh_details.catchphrase}
            hobby={villagerInfo[0].nh_details.hobby}
          />
          ) : (
            null
          )
        }

      </div>
      <p className="dev-credit">© Aidan Fournier 2022</p>
    </div>
  );
}
