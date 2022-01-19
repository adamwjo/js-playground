import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantData, handleUpdate }) {
  return (
    <ul className="cards">{plantData.map((plantObj) => <PlantCard handleUpdate={handleUpdate} key={plantObj.id} {...plantObj}/>) }</ul>
  );
}

export default PlantList;
