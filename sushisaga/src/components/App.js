import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiData, setSushiData] = useState([])
  const [eatenSushi, setEatenSushi] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushiData(data))
  }, [])

  function handleEatSushi(sushiId){
    if(!eatenSushi.includes(sushiId) && wallet - sushiData.find((sushiObj) => sushiObj.id === sushiId).price >= 0){
      //if the sushi ID is NOT present the eatenSushi array, well set state
      setEatenSushi((prevArr) => [...prevArr, sushiId])
     
   
      setWallet(prevWallet => prevWallet - sushiData.find((sushiObj) => sushiObj.id === sushiId).price)

    } else {
      alert("cant eat what already ate, or not enough money")
    }
  }

  // function eatenSushiObjects(){
  //   return sushiData.filter(sO => eatenSushi.includes(sO.id))
  // }

  // console.log(eatenSushiObjects())

  return (
    <div className="app">
      <SushiContainer eatenSushi={eatenSushi} handleEatSushi={handleEatSushi} sushiData={sushiData}/>
      <Table wallet={wallet} eatenSushi={eatenSushi}/>
    </div>
  );
}

export default App;
