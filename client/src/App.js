import React, { useState } from 'react';
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Planets } from "./components/planets/planets";
import { Footer } from './components/footer';
import { DwarfPlanets } from './components/dwarfPlanets/DwarfPlanets';
import { Moons } from './components/moons/Moons';
import { Comets } from './components/comets/Comets';
import { Asteroids } from './components/asteroids/Asteroids';
import { sizes } from './sass/mediaSizes';
import { Info } from './components/info';


function App() {
  const [display, setDisplay] = useState("planets");
  const [showInfo, setShowInfo] = useState(true);
  return (
    <div className="mainContainer">
      {showInfo &&
       <Info setShowInfo={setShowInfo} />
      }
     
      <div className='menuGrid'>
        <Menu setDisplay={setDisplay} />
      </div>
      <div className='headerGrid'>
        <Header />
      </div>
      <div className='contentGrid'>
        <div className="secondBody">
          {display === "planets" && <Planets display={display} />}
          {display === "dwarf-planets" && <DwarfPlanets display={display} />}
          {display === "moons" && <Moons display={display} />}
          {display === "comets" && <Comets display={display} />}
          {display === "asteroids" && <Asteroids display={display} />}
        </div>
      </div>

      <div className='footerGrid'>
        <Footer />
      </div>
    </div>

  );
}

export default App;
