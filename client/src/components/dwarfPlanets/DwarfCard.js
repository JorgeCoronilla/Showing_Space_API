import React, { useState } from 'react'
import loadingGif from '../../media/loading.gif'
import { dwarfPlanetSource } from '../../media/dwarfPlanetsSource'
import { IoIosInformationCircle } from "react-icons/io";
import { BigCard } from '../bigCard';


export const DwarfCard = ({ dwarfPlanets, currentRecords }) => {
  const [showDetails, setShowDetails] = useState('none');

  const showCard = (e) => {
    setShowDetails(e.currentTarget.id)
  }
  const addDefaultImg = (e) => {
    e.target.src = './fallbackImg.png'
  }
  return (
    <div >
      {dwarfPlanets.length > 0 ?
        <div className='cardContainer'>
          {currentRecords.map((planet, index) => {
            let moonsN = 0, radious = Math.ceil(planet.equaRadius)
            let imgPath = dwarfPlanetSource[planet.id]
            if (planet.moons) { moonsN = planet.moons.length }
            if (planet.equaRadius===0){ radious ="No data"} else {
              radious = `${Math.ceil(planet.equaRadius)} Kms`
          }
            return (
              <div className='card' key={planet.name}>
                <img src={imgPath} onError={addDefaultImg} />
                <p className='infoIcon' id={planet.id} onClick={showCard} type="button"><IoIosInformationCircle /></p>
                <div className='titleAndInfoCard'>
                  <h6>{planet.englishName}</h6>
                  <div className='cardInfo'>
                    <div className='infoRow'>
                      <p >Moons: {moonsN}</p>
                      <p >Gravity: {planet.gravity} m.s<sup>-2</sup></p>
                    </div>
                    <div  className='infoRow'>
                      <p className='pSmall'>Radious: {radious}</p>
                      <p className='pSmall'>Inclination: {Math.trunc(planet.inclination)} degrees</p>
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
        <BigCard showDetails={showDetails} item={dwarfPlanets} setShowDetails={setShowDetails} />
      }
      <div className='spacer'></div>
    </div>
  )
}
