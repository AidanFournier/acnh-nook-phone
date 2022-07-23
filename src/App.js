import React from "react"
import axios from "axios"

import Header from "./components/Header"
import Form from "./components/Form"
import Carousel from "./components/Carousel"
// import Card from "./components/Card"


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
    setVillager('');
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
          handleChange={event => setVillager(event.target.value)}
          handleClick={searchVillager}
        />
        {villagerInfo[0] ? 
        (<Carousel 
          villagerInfo={villagerInfo[0]}
          villagerImage={villagerInfo[0].image_url}
          villagerName={villagerInfo[0].name}
          villagerHouseExterior={villagerInfo[0].nh_details.house_exterior_url}
          villagerHouseInterior={villagerInfo[0].nh_details.house_interior_url}
        />) : (
          <div>Undefined</div>
        )
        }
        {/* <Card /> */}

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

  