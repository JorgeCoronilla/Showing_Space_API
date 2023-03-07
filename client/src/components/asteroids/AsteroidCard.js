import React, { useState } from 'react'
import loadingGif from '../../media/loading.gif'
import { asteroidSources } from '../../media/asteroidSources'
import { IoIosInformationCircle } from "react-icons/io";
import { BigCard } from '../bigCard';

export const AsteroidCard = ({ asteroids, currentRecords }) => {
  const [showDetails, setShowDetails] = useState('none');

  const showCard = (e) => {
    setShowDetails(e.currentTarget.id)
  }

  const addDefaultImg = (e) => {
    e.target.src = './fallbackImg.png'
  }

  return (
    <div >
      {asteroids.length > 0 ?
        <div className='cardContainer'>
          {currentRecords.map((asteroid, index) => {
            let imgPath = asteroidSources[asteroid.id]

            return (
              <div className='card' key={asteroid.name}>
                <img src={imgPath} onError={addDefaultImg} />
                <p className='infoIcon' id={asteroid.id} onClick={showCard} type="button"><IoIosInformationCircle /></p>
                <div className='titleAndInfoCard'>
                  <h6>{asteroid.englishName}</h6>
                  <div className='cardInfo'>
                    <div>
                      <p>Inclination: {asteroid.inclination}</p>
                      <p>Eccentricity: {asteroid.eccentricity}</p>
                    </div>
                    <div><p>Orbit: {asteroid.sideralOrbit} Kms</p>
                      <p>Discovered: {asteroid.discoveryDate}</p>
                    </div>
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
      {showDetails !== "none" &&
        <BigCard showDetails={showDetails} item={asteroids} setShowDetails={setShowDetails} />
      }
     
    </div>
  )
}
