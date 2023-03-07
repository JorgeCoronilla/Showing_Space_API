import React, { useState } from 'react'
import loadingGif from '../../media/loading.gif'
import { cometSource } from '../../media/cometSource'
import { IoIosInformationCircle } from "react-icons/io";
import { BigCard } from '../bigCard';


export const CometsCard = ({ comets, currentRecords }) => {
    const [showDetails, setShowDetails] = useState('none');

    const showCard = (e) => {
        setShowDetails(e.currentTarget.id)
    }
    const addDefaultImg = (e) => {
        e.target.src = './fallbackImg.png'
    }
    return (
        <div >
            {comets.length > 0 ?
                <div className='cardContainer'>
                    {currentRecords.map((comet, index) => {
                        let imgPath, orbit;
                        if (comet.id === "c2020f3-neowise") {
                            imgPath = cometSource.neowise
                        } else {
                            imgPath = cometSource[comet.id]
                        }

                        if (comet.sideralOrbit===0){ orbit ="No data"} else {
                            orbit = `${comet.sideralOrbit} days`
                        }
                        return (
                            <div className='card' key={comet.name}>
                                <img src={imgPath} onError={addDefaultImg} />
                                <p className='infoIcon' id={comet.id} onClick={showCard} type="button"><IoIosInformationCircle /></p>
                                <div className='titleAndInfoCard'>
                                    <h6>{comet.englishName}</h6>
                                    <div className='cardInfo'>

                                        <div>
                                            <p>Radius: {comet.meanRadius} Kms</p>
                                            <p>Orbit: {orbit}</p>


                                        </div>
                                        <div>
                                            <p>Date: {comet.discoveryDate}</p>
                                            <p>Eccentricity: {comet.eccentricity}</p>
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
                <BigCard showDetails={showDetails} item={comets} setShowDetails={setShowDetails} />
            }
        </div>
    )
}
