import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants}) {
  const [searchText, setSearchText] = useState("")
  const filteredPlants = plants.filter((plant)=>plant.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search searchText={searchText} filteredPlants={filteredPlants} setSearchText={setSearchText} setPlants={setPlants}/>
      <PlantList plants={filteredPlants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
