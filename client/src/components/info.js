import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";

export const Info = ({setShowInfo}) => {
    const backToList = () => {
        setShowInfo(false)
      }
    return (
        <div className='bigCardContainer'>
            <div className='bigCard'>
                <div className='bigCardTitleContainer'>
                    <h3>Info</h3>
                    <p onClick={backToList} className="closeIcon"><IoCloseCircleSharp /></p>
                </div>
                <p>Info aquí</p>
            </div>
        </div>
    )
}
