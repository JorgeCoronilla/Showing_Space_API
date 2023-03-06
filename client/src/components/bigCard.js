import React, { useEffect, useState } from 'react'
import { planetSource } from '../media/planetsSources'
import { asteroidSources } from '../media/asteroidSources'
import { dwarfPlanetSource } from '../media/dwarfPlanetsSource'
import { cometSource } from '../media/cometSource'
import { moonSources } from '../media/moonSources'

import { IoCloseCircleSharp } from "react-icons/io5";

export const BigCard = ({ showDetails, item, setShowDetails }) => {
  const [currentBody, setCurrentBody] = useState("");
  const [imgPath, setImgPath] = useState("");

  useEffect(() => {
    item.forEach(body => {
      if (body.id === showDetails) {
        setCurrentBody(body);
        switch (body.bodyType) {
          case "Moon":
            setImgPath(moonSources[currentBody.id])
            break;

          case "Planet":
            setImgPath(planetSource[currentBody.englishName])
            break;

          case "Dwarf Planet":
            setImgPath(dwarfPlanetSource[currentBody.id])
            break;

          case "Asteroid":
            setImgPath(asteroidSources[currentBody.id])
            break;

          case "Comet":
            setImgPath(cometSource[currentBody.id])
            break;

          default:
            break;
        }

      }


    });
  }, [currentBody])

  const backToList = () => {
    setShowDetails("none")
  }

  const addDefaultImg = (e) => {
    e.target.src = './fallbackImg.png'
  }

  return (
    <div className='bigCardContainer'>
      <div className='bigCard'>

        {currentBody &&
          <div>
            <div className='bigCardTitleContainer'>
              <h3>{currentBody.englishName}</h3>
              <p onClick={backToList} className="closeIcon"><IoCloseCircleSharp /></p>
            </div>
            <div className='bigCardImgContainer'>
              <img src={imgPath} onError={addDefaultImg} />
            </div>
            <div className='bigCardInfoConatainer'>

              <div className='bigCardInfoRow'>
                <div className='infoKey'>
                  <p>Gravity</p>
                </div>
                <div className='graphicBar'>
                  <div className={`barLength${Math.floor((currentBody.gravity) * 4)} barStyle`}></div>
                </div>
                <div className='infoValue'>
                  {currentBody.gravity === 0 ?
                    <p>No Data</p>
                    :
                    <p>{currentBody.gravity} m.s<sup>-2</sup></p>
                  }
                </div>
              </div>

              <div className='bigCardInfoRow'>
                <div className='infoKey'>
                  <p>Density</p>
                </div>
                <div className='graphicBar'>
                  <div className={`barLength${Math.floor((currentBody.density) * 18.12)} barStyle`}></div>

                </div>
                <div className='infoValue'>
                  {currentBody.density === 0 ?
                    <p>No Data</p>
                    :
                    <p>{currentBody.density.toFixed(2)} g/cm<sup>3</sup></p>
                  }

                </div>
              </div>

              <div className='bigCardInfoRow'>
                <div className='infoKey'>
                  <p>Escape</p>
                </div>
                <div className='graphicBar'>
                  <div className={`barLength${Math.floor((currentBody.escape) * 0.00166)} barStyle`}></div>
                </div>
                <div className='infoValue'>
                  {currentBody.escape === 0 ?
                    <p>No Data</p>
                    :
                    <p>{currentBody.escape} m.s<sup>-1</sup></p>
                  }
                </div>
              </div>

              <div className='bigCardInfoRow'>
                <div className='infoKey'>
                  <p>Eq-radius</p>
                </div>
                <div className='graphicBar'>
                  <div className={`barLength${Math.floor((currentBody.equaRadius) * 0.0013988)} barStyle`}></div>

                </div>
                <div className='infoValue'>
                  {currentBody.equaRadius === 0 ?
                    <p>No Data</p>
                    :
                    <p>{currentBody.equaRadius} Kms</p>}
                </div>
              </div>

              <div className='bigCardInfoRow'>
                <div className='infoKey'>
                  <p>Polar radius</p>
                </div>
                <div className='graphicBar'>
                  <div className={`barLength${Math.floor((currentBody.polarRadius) * 0.0014957)} barStyle`}></div>
                </div>
                <div className='infoValue'>
                  {currentBody.polarRadius === 0 ?
                    <p>No Data</p>
                    :
                    <p>{currentBody.polarRadius} Kms</p>
                  }
                </div>
              </div>

              <div className='bigCardInfoRow'>
                <div className='infoKey'>
                  <p>Flattening</p>
                </div>
                <div className='graphicBar'>
                  <div className={`barLength${Math.floor((currentBody.flattening) * 100)} barStyle`}></div>

                </div>
                <div className='infoValue'>
                  {currentBody.flattening === 0 ?
                    <p>No Data</p>
                    :
                    <p>{currentBody.flattening}</p>}
                </div>
              </div>

              <div className='bigCardInfoRow'>
                <div className='infoKey'>
                  <p>Orbit</p>
                </div>
                <div className='graphicBar'>
                  <div className={`barLength${Math.floor(Math.abs(currentBody.sideralOrbit) * (100 / 11800000))} barStyle`}></div>

                </div>
                <div className='infoValue'>
                  {currentBody.sideralOrbit === 0 ?
                    <p>No Data</p>
                    :
                    <p>{Math.floor(currentBody.sideralOrbit)} Earth days</p>}
                </div>
              </div>

              <div className='bigCardInfoRow'>
                <div className='infoKey'>
                  <p>Rotation</p>
                </div>
                <div className='graphicBar'>
                  <div className={`barLength${Math.floor(Math.abs(currentBody.sideralRotation) * 0.01714)} barStyle`}></div>

                </div>
                <div className='infoValue'>
                  {currentBody.sideralRotation === 0 ?
                    <p>No Data</p>
                    :
                    <p>{Math.floor(currentBody.sideralRotation)} Earth days</p>}
                </div>
              </div>

              <div className='bigCardInfoRow'>
                <div className='infoKey'>
                  <p>Eccentricity</p>
                </div>
                <div className='graphicBar'>
                  <div className={`barLength${Math.floor(Math.abs(currentBody.eccentricity) * 100)} barStyle`}></div>

                </div>
                <div className='infoValue'>
                  {currentBody.eccentricity === 0 ?
                    <p>No Data</p>
                    :
                    <p>{currentBody.eccentricity.toFixed(3)}</p>}
                </div>
              </div>

              <div className='bigCardInfoRow'>
                <div className='infoKey'>
                  <p>Inclination</p>
                </div>
                <div className='graphicBar'>
                  <div className={`barLength${Math.floor(Math.abs(currentBody.inclination) * 0.55)} barStyle`}></div>

                </div>
                <div className='infoValue'>
                {currentBody.inclination === 0 ?
                    <p>No Data</p>
                    :
                  <p>{currentBody.inclination.toFixed(2)} degrees</p>}
                </div>
              </div>
              {currentBody.bodyType !== "Comet" || currentBody.mass.massValue === null || !currentBody.mass.massValue &&
                <div className='bigCardInfoRow'>
                  <div className='infoKey'>
                    <p>Mass</p>
                  </div>
                  <div className='graphicBar'>
                    <div className={`barLength${currentBody.mass.massValue.toFixed(2) * 10} barStyle`}></div>

                  </div>
                  <div className='infoValue'>
                  {currentBody.mass.massValue === 0 ?
                    <p>No Data</p>
                    :
                    <p>{currentBody.mass.massValue.toFixed(2)} x 10<sup>n</sup> kg</p>}
                  </div>
                </div>

              }


            </div>
          </div>
        }
      </div>
    </div>
  )
}
