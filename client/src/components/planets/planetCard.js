import React, { useState } from 'react'
import loadingGif from '../../media/loading.gif'
import { planetSource } from '../../media/planetsSources'
import { BigCard } from '../bigCard';
import { IoIosInformationCircle } from "react-icons/io";

export const PlanetCard = ({ planets2, currentRecords }) => {

  const [showDetails, setShowDetails] = useState('none');

  const showCard = (e) => {
    setShowDetails(e.currentTarget.id)
  }

  const addDefaultImg = (e) => {
    e.target.src = './fallbackImg.png'
  }

  return (
    <div >
      {planets2.length > 0 ?
        <div className='cardContainer'>
          {currentRecords.map((planet, index) => {
            let moonsN = 0, radious = Math.ceil(planet.equaRadius)
            let imgPath = planetSource[planet.englishName]
            if (planet.moons) { moonsN = planet.moons.length }

            return (
              <div className='card' key={planet.name}>
                <img src={imgPath} onError={addDefaultImg} />
                <p className='infoIcon' id={planet.id} onClick={showCard} type="button"><IoIosInformationCircle /></p>
                <div className='titleAndInfoCard'>
                  <h6 >{planet.englishName}</h6>

                  <div className='cardInfo' >
                    <div >
                      <p >Moons: {moonsN}</p>
                      <p >Gravity: {planet.gravity} m.s<sup>-2</sup></p>
                    </div>
                    <div >
                      <p >Radious: {radious} Kms</p>
                      <p>Density: {planet.density} g/cm<sup>3</sup></p>
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
        <BigCard showDetails={showDetails} item={planets2} setShowDetails={setShowDetails} />
      }
    </div>
  )
}
