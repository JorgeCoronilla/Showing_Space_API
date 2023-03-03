import React from 'react'
import loadingGif from '../../media/loading.gif'
import {moonSources} from '../../media/moonSources'

export const MoonCard = ({ moons, currentRecords }) => {
    const addDefaultImg = (e) => {
        e.target.src = './fallbackImg.png'
      }
  return (
    <div >
    {moons.length > 1 ?
      <div className='cardContainer'>
        {currentRecords.map((moon, index) => {
          let radious = Math.ceil(moon.equaRadius)
          let imgPath = moonSources[moon.id]

          return (
            <div className='card' key={moon.name}>
              <img src={imgPath} onError={addDefaultImg} />
              <h6>{moon.englishName}</h6>
              <div className='cardInfo'>
                <div>
                  <p>Planet: {moon.aroundPlanet.planet}</p>
                  <p>Gravity: {moon.gravity}</p>
                </div>
                <div>
                  <p>Radious: {radious}Km</p>
                  <p>Density: {moon.density}</p>
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
