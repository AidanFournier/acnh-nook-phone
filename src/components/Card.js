import React from "react"

import Cake from "../images/cake.png"
import TextBubble from "../images/text-bubble.png"

// export default function Card(props) {

//     function getDaySuffix(num) {
//         var array = ("" + num).split("").reverse(); // E.g. 123 = array("3","2","1")
        
//         if (array[1] !== "1") { // Number is not in the teens
//             switch (array[0]) {
//                 case "1": return "st";
//                 case "2": return "nd";
//                 case "3": return "rd";
//             }
//         }
    
//         return "th";
//     }

//     return (
//         {villagerInfo[0] !== undefined && 
//             <div className="villager--stats">
//                         <div className="villager--type">
//                             <div className="villager--personality">
//                                 <h3>Personality</h3>
//                                 {villagerInfo ? <p>{villagerInfo[0].personality.toLowerCase()}</p> : null}
//                             </div>
//                             <div className="villager--species">
//                                 <h3>Species</h3>
//                                 {villagerInfo ? <p>{villagerInfo[0].species.toLowerCase()}</p> : null}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="villager--birthday">
//                         <img src= {Cake} alt="Bithday cake" className="cake" />
//                         {villagerInfo ? <p>{villagerInfo[0].birthday_month}</p> : null}
//                         {villagerInfo ? <p>{villagerInfo[0].birthday_day}{getDaySuffix(villagerInfo[0].birthday_day)}</p> : null}
//                     </div>
//                     <div className="bottom-stats">
//                         <div className="villager--quote-bubble">
//                             <div>
//                                 <img src= {TextBubble} alt="Text bubble" className="text-bubble"/>
//                             </div>
//                             {villagerInfo ? <p>{villagerInfo[0].nh_details.catchphrase}</p> : null}
//                         </div>
//                         <div className="villager--hobby">
//                             <h4>Hobby</h4>
//                             {villagerInfo ? <p>{villagerInfo[0].nh_details.hobby} </p> : null}
//                         </div>
//                     </div>
                    
//         }
//     )
// }