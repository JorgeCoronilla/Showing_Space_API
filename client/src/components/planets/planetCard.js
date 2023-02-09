import React, {useContext} from 'react'
import { CreateMainContext } from '../../providers/createMainProvider'
import loadingGif from '../../media/loading.gif'
import planetsImgs from '../../media'


export const PlanetCard = ({planets2, currentRecords}) => {

const addDefaultImg = (e) => {
    e.target.src='./fallbackImg.png'
}

    //const {planets2} = useContext(CreateMainContext)
  return (
    <div >
        {planets2.length > 1 ?
          <div className='cardContainer'>
            {currentRecords.map((planet, index) => {
                let population
                let imgName=planet.name.toLowerCase().replace(/\s/g, "");
                let imgPath = `./planets/${imgName}.png`
                if (planet.population==="unknown") {
                    population = "Unknown population"
                } else if (planet.population<1000000 ){
                    population = 'Population of ' + planet.population/1000 +'k'
                } else {population = 'Population of ' + planet.population/1000000 +'M'} 
                 
                    return (
                        <div className='card' key={planet.name}>
                            <img src={imgPath} onError={addDefaultImg}/>
                            <h6>{planet.name}</h6>
                            <p>{planet.climate}, {planet.terrain}</p>
                            <p>{population}</p>
                        </div>            
                      )
            })}
          </div>
          :
          <div className='loading'>
            <img src={loadingGif} alt="Loading Data" />
            <p>Loading data...</p>
          </div>
        }
    </div>
  )
}
