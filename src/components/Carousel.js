import React from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

import WoodSign from "../images/wood-sign.png"

export default function Carousel(props) {

    return (
        <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper"
        >
        
            <div className="villager--results">
                <SwiperSlide>
                    <div className="polaroid-picture villager-avatar">
                        <img src={`${props.villagerImage}`} className="villager--image" alt="Villager"/>
                        <img src= {WoodSign} alt="Wooden sign" className="wooden-sign" />
                        <div className="villager--name">
                            <h2>{props.villagerName}</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="polaroid-picture house-exterior">
                        <img src={`${props.villagerHouseExterior}`} className="villager--image house-exterior-img" alt="Villager's house exterior"/>
                        <img src= {WoodSign} alt="Wooden sign" className="wooden-sign" />
                        <h3 className="villager--name-exterior">
                            House Exterior
                        </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="polaroid-picture house-interior">
                        <img src={`${props.villagerHouseInterior}`} className="house-interior-img" alt="Villager's house interior"/>
                        <img src= {WoodSign} alt="Wooden sign" className="wooden-sign" />
                        <h3 className="villager--name-interior">
                            House Interior
                        </h3>
                    </div>
                </SwiperSlide>
            
            </div>     
        </Swiper>
    )
}