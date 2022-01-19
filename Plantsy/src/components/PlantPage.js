import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plantData => setPlants(plantData))
  }, [])

  function createPlant(newPlant){
    // const newPlantsArr = [...plants, newPlant]
    // setPlants(newPlantsArr)

    setPlants((oldPlants) => [...oldPlants, newPlant])
  }

  function handleUpdate(updatedPlant){
    const updatedPlantArr = plants.map((plantObj) => {
      if(plantObj.id === updatedPlant.id){
        return updatedPlant
      } else {
        return plantObj
      }
    })

    setPlants(updatedPlantArr)
  }

  const filteredPlants = plants.filter(({name}) => name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm createPlant={createPlant}/>
      <Search  setSearchTerm={setSearchTerm}/>
      <PlantList handleUpdate={handleUpdate} plantData={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
