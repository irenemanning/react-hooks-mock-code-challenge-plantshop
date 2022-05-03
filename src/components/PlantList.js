import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const mapPlants = plants.map((plant) => <PlantCard key={plant.id} plant ={plant}/>)
  return (
    <ul className="cards">{mapPlants}</ul>
  );
}

export default PlantList;
