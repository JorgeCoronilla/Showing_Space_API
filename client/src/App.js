import React, { useEffect, useState } from 'react';
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { CreateMainContext } from "./providers/createMainProvider";
import {Planets} from "./components/planets/planets";
import {StarShips} from "./components/starShips/starShips";
import { Vehicles } from "./components/vehicles/vehicles";
import People from "./components/people/people";
import { fetchAllPlanetData } from "./helpers/getFromApi";
import { sortBy } from './helpers/sortItems';



function App() {

  const [display, setDisplay] = useState("planets"); 
  return (
    <CreateMainContext.Provider value ={{}}>
      <div className="mainContainer">
        <div>
          <Menu setDisplay={setDisplay} />
        </div>
        <div className="secondBody">
          <Header />
          {display === "planets" && <Planets />}
          {display === "starShips" && <StarShips />}
          {display === "vehicles" && <Vehicles />}
          {display === "people" && <People />}
        </div>

      </div>
    </CreateMainContext.Provider>

  );
}

export default App;
