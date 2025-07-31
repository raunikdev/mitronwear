import './css/designDisplayHome.css'

import Tshirtcard from "./tshirtcard";

import ButterflyBack from './tshirtImages/butterflyBack.png'
import ButterflyFront from './tshirtImages/butterflyFront.png'
import PandaFront from './tshirtImages/pandaFront.png'
import PandaBack from './tshirtImages/pandaBack.png'

import SamuraiFront from './tshirtImages/samuraiFront.png'
import SamuraiBack from './tshirtImages/samuraiBack.png'

function DesignDisplayHome(){
    return(
        <>
        <div id="tshirtheader">
            <h1>T-Shirt Designs</h1>
        </div>
        <div className="all-tshirt">
            <Tshirtcard link="#"
                        heading="ButterFly OverSized T-shirt"
                        price="$1500"
                        originalPrice="$2000"
                        front={ButterflyFront}
                        back= {ButterflyBack}
                        />
            
            <Tshirtcard link="#"
                        heading="Panda OverSized T-shirt"
                        originalPrice="$2000"
                        price="$1500"
                        front={PandaFront}
                        back= {PandaBack}
                        />
            
            <Tshirtcard link="#"
                        heading="Samurai OverSized T-shirt"
                        originalPrice="$2000"
                        price="$1500"
                        front={SamuraiFront}
                        back= {SamuraiBack}
                        />
                        
            
        </div>
        
            
        </>
    )
}
export default DesignDisplayHome;