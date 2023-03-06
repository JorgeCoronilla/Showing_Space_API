import React, {useState} from 'react';
import { IoInformationCircle, IoMailSharp } from "react-icons/io5";
import { Info } from './info';

export const Header = () => {
    const [showInfo, setShowInfo] = useState (false)
    const info = () => {
        setShowInfo(!showInfo)

    }
    return (
        <div className='header'>
            <div className='headerTitles'>
                <h1>Solar System Bodies</h1>
            </div>
            <div className='headerIcons'>
                <p><IoInformationCircle onClick={info}/></p>
                <p  onClick={(e) => {window.location.href ='mailto:jorge.coronilla.naranjo@gmail.com';}}><IoMailSharp /></p>
            </div>
            {showInfo && 
            <Info showInfo={showInfo} setShowInfo={setShowInfo}/>
            }
        </div>
    )
}
