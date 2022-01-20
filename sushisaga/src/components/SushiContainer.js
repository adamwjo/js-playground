import React, { useState } from "react";
import MoreButton from "./MoreButton";

import Sushi from './Sushi'

function SushiContainer({ sushiData, handleEatSushi, eatenSushi }) {

  const [beltPosition, setBeltPosition] = useState(0)

  function sushiToRender(){

    //we need to make a new array based off sushidata
    const displayArr = sushiData.slice(beltPosition, beltPosition + 4)
    //starting we want the first four 

    return displayArr
    // return an array of four sushi
  }

  function handleMoreSushi(e){
    //more logic to restart
    setBeltPosition((prevPostion) => prevPostion + 4)
  }

  

  return (
    <div className="belt">
      {sushiToRender().map(sushiObj => <Sushi eatenSushi={eatenSushi}  handleEatSushi={handleEatSushi} key={sushiObj.id} {...sushiObj} />)}
      <MoreButton handleMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
