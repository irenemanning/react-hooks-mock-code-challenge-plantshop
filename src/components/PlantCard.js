import React, { useState } from "react";

function PlantCard({ plant }) {
  const [stock, setStock] = useState(true)
  function toggleStock(){
    setStock(!stock)
  }
  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stock ? (
        <button onClick={toggleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
