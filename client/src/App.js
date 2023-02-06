import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Search } from "./components/search";
import { CreateMainContext } from "./providers/createMainProvider";
import {useState} from 'react'

function App() {

  const [display, setDisplay] = useState("planets");


  return (
    <CreateMainContext.Provider value ={{}}>
      <div className="mainContainer">
        <div>
          <Menu setDisplay={setDisplay} />
        </div>
        <div class="secondBody">
          <Header />
          <Search />
          
        </div>

      </div>
    </CreateMainContext.Provider>

  );
}

export default App;
