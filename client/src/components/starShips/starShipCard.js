import React from 'react'
import loadingGif from '../../media/loading.gif'

export const StarShipCard = ({starShips, currentRecords}) => {
  
    const addDefaultImg = (e) => {
        e.target.src='./rocket.png'
    }
  
    return (
        <div >
        {starShips.length > 1 ?
          <div className='cardContainer'>
            {currentRecords.map((starShip, index) => {
                  let cargo
                let imgName=starShip.name.toLowerCase().replace(/\s/g, "");
                let imgPath = `./starships/${imgName}.png`
                if (starShip.cargo_capacity==="unknown") {
                    cargo = "Unknown capacity"
                } else if (starShip.cargo_capacity<1000000 ){
                    cargo = starShip.cargo_capacity/1000 +'k'
                } else {cargo = starShip.cargo/1000000 +'M'} 
             
                    return (
                        <div className='card' key={starShip.name}>
                            <img src={imgPath} onError={addDefaultImg}/>
                            <h6>{starShip.name}</h6>
                            <p>{starShip.model} - Crew: {starShip.crew}</p>
                            <p>Cargo capacity: { starShip.cargo_capacity}</p>
                        </div>            
                      )
            })}
          </div>
          :
          <div>
            <img src={loadingGif} alt="Loading Data" />
            <p>Loading data...</p>
          </div>
        }
    </div>
  )
}
