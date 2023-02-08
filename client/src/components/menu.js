import React, { useState } from 'react';
import { IoRocketOutline, IoPlanetOutline } from "react-icons/io5";
import { RiTeamLine, RiTruckLine } from "react-icons/ri";
import imperialIcon from '../media/comet.png'
import { GoThreeBars } from "react-icons/go";
import { MobileMenu } from './mobileMenu';

export const Menu = ({setDisplay}) => {
  const [displayMobile, setDisplayMobile] = useState(false)
  const iconStyle = { fontSize: "20px", position: "relative", top: "3px" }
  const BurgerIconStyle = { fontSize: "40px", position: "absolute", top: "-65px", right:"75px" }

  return (
    <div className='menu'>
      <div className='menuList'>
        <img src={imperialIcon} alt="Imperial Destroyer Center Icon" />
        <h3>IDC</h3>
        <div className='menudesktop'>
        <p onClick={()=>setDisplay("planets")}><span><IoPlanetOutline style={iconStyle} /></span>Planets</p>
        <p onClick={()=>setDisplay("starShips")}><span><IoRocketOutline style={iconStyle}/></span>StarShips</p>
        <p onClick={()=>setDisplay("people")}><span><RiTeamLine style={iconStyle}/></span>People</p>
        <p onClick={()=>setDisplay("vehicles")}><span><RiTruckLine style={iconStyle}/></span>Vehicles</p>
      
        </div>
        <div className='menumobile' onClick={()=>setDisplayMobile(!displayMobile)}>
        <GoThreeBars style={BurgerIconStyle}/>
        </div>
        {displayMobile &&
        <div>
          <MobileMenu setDisplay={setDisplay} iconStyle={iconStyle} />
        </div>
        }
       </div>
    </div>
  )
}
