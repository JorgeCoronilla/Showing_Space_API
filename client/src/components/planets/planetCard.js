import React from 'react'
import loadingGif from '../../media/loading.gif'
import { planetSource } from '../../media/planetsSources'

export const PlanetCard = ({ planets2, currentRecords }) => {

  const addDefaultImg = (e) => {
    e.target.src = './fallbackImg.png'
  }

  //const {planets2} = useContext(CreateMainContext)
  return (
    <div >
      {planets2.length > 1 ?
        <div className='cardContainer'>
          {currentRecords.map((planet, index) => {
            let moonsN = 0, radious = Math.ceil(planet.equaRadius)
            let imgPath = planetSource[planet.englishName]
            if (planet.moons) { moonsN = planet.moons.length }

            return (
              <div className='card' key={planet.name}>
                <img src={imgPath} onError={addDefaultImg} />
                <h6>{planet.englishName}</h6>
                <div className='cardInfo'>
                  <div>
                    <p>Moons: {moonsN}</p>
                    <p>Gravity: {planet.gravity}</p>
                  </div>
                  <div>
                    <p>Radious: {radious}Km</p>
                    <p>Inclination: {planet.inclination}</p>
                  </div>
                </div>
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
