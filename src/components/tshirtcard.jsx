

import './css/tshirtcard.css'

function Tshirtcard (prop){
    return(
        <>
            <div className="card-tshirt">
                <div className='image-div' style={{backgroundImage: `url(${prop.front})`}}>
                    <div className="image-back" style={{backgroundImage: `url(${prop.back})`}} >

                    </div>
                </div>
                <a href={prop.link}>
                    <div className='name-price'>
                        <p className='heading-tshirt'><b>{prop.heading}</b></p>
                        <p className="price"><b><span className='original-price'>{prop.originalPrice}</span>{prop.price}</b></p> 
                    </div>

                </a>

                

            </div>
        </>
    )
}
export default Tshirtcard;