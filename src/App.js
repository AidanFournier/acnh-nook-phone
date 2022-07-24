import React from "react"
import axios from "axios"

import Header from "./components/Header"
import Form from "./components/Form"
import Carousel from "./components/Carousel"
import Card from "./components/Card"


export default function App() {

  const [villager, setVillager] = React.useState("");
  const [villagerInfo, setVillagerInfo] = React.useState({});

  const url = `https://api.nookipedia.com/villagers?game=NH&nhdetails=true&name=${villager}`;
  const header = {
      "X-API-KEY": process.env.REACT_APP_NOOKIPEDIA_API_KEY,
      "Accept-Version": "1.5.0",
      "Accept": "application/json, text/plain, /","Content-Type": "multipart/form-data"
  }

  const searchVillager = async () => {
    try {
      const response = await axios.get(url, {headers: header});
      setVillagerInfo(response.data);
      console.log(response.data);
    } catch (err) {
      console.log('👹 ERROR: ' + err.response.data);
    };
  };

  React.useEffect(() => {
    searchVillager();
  }, []);

  return (
    <div className="main">
      <h1>Nook Phone</h1>
      <div className="phone">
        <Header />
        <Form 
          value = {villager}
          handleChange={event => setVillager(event.target.value)}
          handleClick={searchVillager}
        />
        {villagerInfo.length === 1 ? 
          (<Carousel 
            villagerInfo={villagerInfo[0]}
            villagerImage={villagerInfo[0].image_url}
            villagerName={villagerInfo[0].name}
            villagerHouseExterior={villagerInfo[0].nh_details.house_exterior_url}
            villagerHouseInterior={villagerInfo[0].nh_details.house_interior_url}
          />
          ) : (
            <div>Undefined</div>
          )
        }
        {villagerInfo.length === 1 ? 
          (<Card 
            villagerInfo={villagerInfo[0]}
            villagerPersonality={villagerInfo[0].personality.toLowerCase()}
            villagerSpecies={villagerInfo[0].species.toLowerCase()}
            villagerBirthdayMonth={villagerInfo[0].birthday_month}
            villagerBirthdayDay={villagerInfo[0].birthday_day}
            catchphrase={villagerInfo[0].nh_details.catchphrase}
            hobby={villagerInfo[0].nh_details.hobby}
          />
          ) : (
            null
          )
        }

      </div>
    </div>
  );
}

  // function searchVillager(e) {
    //   e.preventDefault();
    //   console.log(e);
      
    //   axios.get(url, {headers: header})
    //       .then(response => {
    //           setVillagerInfo(response.data)
    //           console.log(response.data)
    //       })
    //       .catch((error) => {
    //         console.log('error' + error);
    //       });
    //       setVillager('');
    // }


    // function searchVillager(event) {
    //   console.log(event);
    //   setVillager(event.target.value);
    // }

    // React.useEffect(() => {
  //     // e.preventDefault();
  //     // console.log(e);
      
  //     axios.get(url, {headers: header})
  //         .then(response => {
  //             setVillagerInfo(response.data)
  //             console.log(response.data)
  //         })
  //         .catch((error) => {
  //           console.log('error' + error);
  //         });
  //         // setVillager('');
    
  // }, [villager])
    
  // async function fetchData() { 
  //   const request = await axios.get(url, { headers: {header} })
  //     .then(response => {
  //         setVillagerInfo(response.data)
  //         console.log(response.data)
  //     })
  //     // .catch((error) => {
  //     //   console.log('error' + error);
  //     // });
  //     setVillager('');
  // }
  // fetchData();

  