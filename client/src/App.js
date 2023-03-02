import React, { useState } from 'react';
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { CreateMainContext } from "./providers/createMainProvider";
import { Planets } from "./components/planets/planets";
import { Footer } from './components/footer';
import { DwarfPlanets } from './components/dwarfPlanets/DwarfPlanets';
import { Moons } from './components/moons/Moons';
import { Comets } from './components/comets/Comets';
import { Asteroids } from './components/asteroids/Asteroids';



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
            {display === "dwarf-planets" && <DwarfPlanets />}
            {display === "moons" && <Moons />}
            {display === "comets" && <Comets />}
            {display === "asteroids" && <Asteroids />}
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
