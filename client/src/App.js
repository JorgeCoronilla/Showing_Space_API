import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { CreateMainContext } from "./providers/createMainProvider";
import {useState} from 'react';
import {Planets} from "./components/planets/planets";
import {StarShips} from "./components/starShips/starShips";
import { Vehicles } from "./components/vehicles/vehicles";
import People from "./components/people/people";


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
                 

          {display === "planets" && <Planets setDisplay={setDisplay} />}
          {display === "starShips" && <StarShips />}
          {display === "vehicles" && <Vehicles setDisplay={setDisplay} />}
          {display === "people" && <People setDisplay={setDisplay} />}
        </div>

      </div>
    </CreateMainContext.Provider>

  );
}

export default App;
