import { useState } from 'react';
import ButterflyBack from './tshirtImages/butterflyBack.png'
import ButterflyFront from './tshirtImages/butterflyFront.png'

import './css/tshirtcard.css'

function Tshirtcard (){
    const [hovered,setHovered] = useState(false);
    return(
        <>
            {/* <img src={ButterflyFront}/> */}
            <div className="card-tshirt">
                <div className='image-div' style={{backgroundImage: `url(${ButterflyBack})`}}>
                {/* <img className='image' 
                     onMouseEnter={()=>{setHovered(true)}}
                     onMouseLeave={()=>{setHovered(false)}}
                     src={hovered? ButterflyFront: ButterflyBack}/> */}

                </div>
                

            </div>
        </>
    )
}
export default Tshirtcard;