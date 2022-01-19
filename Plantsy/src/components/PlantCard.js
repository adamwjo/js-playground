import React, { useState } from "react";

function PlantCard({id, image, name, price, handleUpdate}) {
  const [inStock, setInStock] = useState(true)

  function updatePrice(){
    // make a fetch

    fetch('http://localhost:6001/plants/'+id, {
      headers: {'Content-Type': 'application/json'},
      method: "PATCH",
      body: JSON.stringify({price: +price + 10})
    })
    .then(r => r.json())
    .then((updatedPlant) => handleUpdate(updatedPlant))
    // use updated plant to update the DOM (state)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={() => updatePrice()}>Money Go Up</button>
      {<button onClick={() => setInStock(!inStock)} className={ inStock ? "primary" : null}> {inStock ? "In Stock" : "Out of stock"}</button> }
    </li>
  );
}

export default PlantCard;
