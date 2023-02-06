import React from 'react';
import { IoRocketOutline, IoPlanetOutline } from "react-icons/io5";
import { RiTeamLine, RiTruckLine } from "react-icons/ri";
import imperialIcon from '../media/comet.png'
export const Menu = ({setDisplay}) => {

  const iconStyle = { fontSize: "20px", position: "relative", top: "3px" }

  return (
    <div className='menu'>
      <div className='menuList'>
        <img src={imperialIcon} alt="Imperial Destroyer Center Icon" />
        <h3>IDC</h3>
        <p onClick={()=>setDisplay("planets")}><span><IoPlanetOutline style={iconStyle} /></span>Planets</p>
        <p onClick={()=>setDisplay("starShips")}><span><IoRocketOutline style={iconStyle}/></span>StarShips</p>
        <p onClick={()=>setDisplay("people")}><span><RiTeamLine style={iconStyle}/></span>People</p>
        <p onClick={()=>setDisplay("vehicles")}><span><RiTruckLine style={iconStyle}/></span>Vehicles</p>
      </div>
    </div>
  )
}
