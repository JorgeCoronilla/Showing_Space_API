import React from 'react'
import loadingGif from '../../media/loading.gif'
import { cometSource } from '../../media/cometSource'

export const CometsCard = ({ comets, currentRecords }) => {
    const addDefaultImg = (e) => {
        e.target.src = './fallbackImg.png'
    }
    return (
        <div >
            {comets.length > 1 ?
                <div className='cardContainer'>
                    {currentRecords.map((comet, index) => {
                        let imgPath;
                        if (comet.id === "c2020f3-neowise") {
                            imgPath = cometSource.neowise
                        } else {
                            imgPath = cometSource[comet.id]
                        }
                        return (
                            <div className='card' key={comet.name}>
                                <img src={imgPath} onError={addDefaultImg} />
                                <h6>{comet.englishName}</h6>
                                <div className='cardInfo'>

                                    <div>

                                        <p>Orbit: {comet.sideralOrbit} days</p>
                                        <p>Inclination: {comet.inclination}</p>

                                    </div>
                                    <div>
                                        <p>Date: {comet.discoveryDate}</p>
                                        <p>Eccentricity: {comet.eccentricity}</p>
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
