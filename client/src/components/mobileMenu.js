import React from 'react'
import { IoRocketOutline, IoPlanetOutline } from "react-icons/io5";
import { RiTeamLine, RiTruckLine } from "react-icons/ri";

export const MobileMenu = ({setDisplay, iconStyle}) => {
  return (
    <div className='mobileMenu'>
        <p>
        <p onClick={()=>setDisplay("planets")}><span><IoPlanetOutline style={iconStyle} /></span>Planets</p>
        <p onClick={()=>setDisplay("starShips")}><span><IoRocketOutline style={iconStyle}/></span>StarShips</p>
        <p onClick={()=>setDisplay("people")}><span><RiTeamLine style={iconStyle}/></span>People</p>
        <p onClick={()=>setDisplay("vehicles")}><span><RiTruckLine style={iconStyle}/></span>Vehicles</p>
      
        </p>
        </div>
  )
}
