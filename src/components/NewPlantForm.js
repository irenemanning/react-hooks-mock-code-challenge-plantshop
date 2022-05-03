import React, { useState } from "react";

function NewPlantForm({ plants, setPlants }) {
  const [plantData, setPlantData] = useState({
    image: "",
    name: "",
    price: ""
  })
  function handleChange(e){
    setPlantData({
      ...plantData,
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "image": plantData.image,
        "name": plantData.name,
        "price": plantData.price
      })
    })
    .then((r)=>r.json())
    .then((newPlant) => {
      setPlants([...plants, newPlant,])
    })
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL"  />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" v />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
