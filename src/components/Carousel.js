import React from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

import WoodSign from "../images/wood-sign.png"
import House from "../images/house.png"
import Arrow from "../images/arrow.png"


// export default function Carousel(props) {

//     return (
//         <Swiper 
//         navigation={true} 
//         modules={[Navigation]} 
//         className="mySwiper"
//         >
        
//         <div className="card">
            

//             {villagerInfo[0] !== undefined &&
//                 <div className="villager--results">
//                     <SwiperSlide>
//                         <div className="polaroid-picture villager-avatar">
//                             {villagerInfo[0] ? <img src={`${villagerInfo[0].image_url}`} className="villager--image" alt="Villager"/> : null}
//                             <img src= {WoodSign} alt="Wooden sign" className="wooden-sign" />
//                             <div className="villager--name">
//                                 {villagerInfo ? <h2>{villagerInfo[0].name}</h2> : null}
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="polaroid-picture house-exterior">
//                             {villagerInfo[0] ? <img src={`${villagerInfo[0].nh_details.house_exterior_url}`} className="villager--image house-exterior-img" alt="Villager's house exterior"/> : null}
//                             <img src= {WoodSign} alt="Wooden sign" className="wooden-sign" />
//                             <h3 className="villager--name-exterior">
//                                 House Exterior
//                             </h3>
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className="polaroid-picture house-interior">
//                             {villagerInfo[0] ? <img src={`${villagerInfo[0].nh_details.house_interior_url}`} className="house-interior-img" alt="Villager's house interior"/> : null}
//                             <img src= {WoodSign} alt="Wooden sign" className="wooden-sign" />
//                             <h3 className="villager--name-interior">
//                                 House Interior
//                             </h3>
//                         </div>
//                     </SwiperSlide>

                    
//                     <div className="next-picture-exterior slideRight">
//                         <img src= {House} alt="House icon" className="house-icon" />
//                         <img src= {Arrow} alt="Arrow" className="arrow" />
//                     </div>
                    
                    


//                 </div>
//             }


//         </div>
//         </Swiper>
//     )
// }