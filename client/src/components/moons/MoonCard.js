import React, { useState } from 'react'
import loadingGif from '../../media/loading.gif'
import { moonSources } from '../../media/moonSources'
import { IoIosInformationCircle } from "react-icons/io";
import { BigCard } from '../bigCard';


export const MoonCard = ({ moons, currentRecords }) => {
  const [showDetails, setShowDetails] = useState('none');

  const showCard = (e) => {
    setShowDetails(e.currentTarget.id)
  }
  const addDefaultImg = (e) => {
    e.target.src = './fallbackImg.png'
  }
  return (
    <div >
      {moons.length > 0 ?
        <div className='cardContainer'>
          {currentRecords.map((moon, index) => {
            let radious = Math.ceil(moon.equaRadius)
            let imgPath = moonSources[moon.id]

            return (
              <div className='card' key={moon.name}>
                <img src={imgPath} onError={addDefaultImg} />
                <p className='infoIcon' id={moon.id} onClick={showCard} type="button"><IoIosInformationCircle /></p>
                <div className='titleAndInfoCard'>
                  <h6>{moon.englishName}</h6>
                  <div className='cardInfo'>
                    <div>
                      <p className='capitalizeMe'>Planet: {moon.aroundPlanet.planet}</p>
                      <p>Gravity: {moon.gravity} m.s<sup>-2</sup></p>
                    </div>
                    <div>
                      <p>Radious: {radious}Km</p>
                      <p>Density: {moon.density} g/cm<sup>3</sup></p>
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
        <BigCard showDetails={showDetails} item={moons} setShowDetails={setShowDetails} />
      }
    </div>
  )
}
