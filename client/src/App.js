import React, { useEffect, useState } from 'react';
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { CreateMainContext } from "./providers/createMainProvider";
import { Planets } from "./components/planets/planets";
import { StarShips } from "./components/starShips/starShips";
import { Vehicles } from "./components/vehicles/vehicles";
import People from "./components/people/people";
import { fetchAllPlanetData } from "./helpers/getFromApi";
import { sortBy } from './helpers/sortItems';
import { Footer } from './components/footer';



function App() {

  const [display, setDisplay] = useState("planets");
  return (
    <CreateMainContext.Provider value={{}}>
      <div className="mainContainer">
        <div className='menuGrid'>
          <Menu setDisplay={setDisplay} />
        </div>
        <div className='headerGrid'>
          <Header />
        </div>
        <div className='contentGrid'>
          <div className="secondBody">
            {display === "planets" && <Planets />}
            {display === "starShips" && <StarShips />}
            {display === "vehicles" && <Vehicles />}
            {display === "people" && <People />}
          </div>
        </div>

        <div className='footerGrid'>
          <Footer />
        </div>
      </div>
    </CreateMainContext.Provider>

  );
}

export default App;
