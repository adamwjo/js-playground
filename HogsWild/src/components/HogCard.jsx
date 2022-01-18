import React, { useState } from 'react'

const HogCard = ({ data }) => {

    const [showDetails, setShowDetails] = useState(false)


    const { name, image, greased, specialty, weight } = data

    function renderDetails(){
        if (showDetails) {
            return (
                <div>
                     <ul>
                         <li>{greased ? "reall greasy" : "reallll dry" }</li>
                         <li>specialty: {specialty}</li>
                         <li>weight: {weight}</li>
                     </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <h3>{name}</h3>
                    <img style={{objectFit: "cover"}} height='200' width='200' src={image}/>
                </div>
            )
        }
    }

    return (
        <div onClick={() => setShowDetails((prevState) => !prevState)} className="ui four wide column">
            {renderDetails()}
        </div>
    )
}

export default HogCard
