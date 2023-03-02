import React, { useState } from 'react';
import { IoMoonOutline, IoPlanetOutline } from "react-icons/io5";
import { IoIosPlanet } from "react-icons/io";
import { GiCometSpark, GiAsteroid} from "react-icons/gi"
import solarSystemIcon from '../media/solar-system.png'
import { GoThreeBars } from "react-icons/go";
import { MobileMenu } from './mobileMenu';

export const Menu = ({setDisplay}) => {
  const [displayMobile, setDisplayMobile] = useState(false)
  const iconStyle = { fontSize: "13px", position: "relative", top: "3px" }
  const BurgerIconStyle = { fontSize: "40px", position: "absolute", top: "-65px", right:"75px" }

  return (
    <div className='menu'>
      <div className='menuList'>
        <img src={solarSystemIcon} alt="Imperial Destroyer Center Icon" />
        <h3>SSB</h3>
        <div className='menudesktop'>
        <p onClick={()=>setDisplay("planets")}><span><IoPlanetOutline style={iconStyle} /></span>Planets</p>
        <p onClick={()=>setDisplay("dwarf-planets")}><span><IoIosPlanet style={iconStyle}/></span>Dwarf Planets</p>
        <p onClick={()=>setDisplay("moons")}><span><IoMoonOutline style={iconStyle}/></span>Moons</p>
        <p onClick={()=>setDisplay("comets")}><span><GiCometSpark style={iconStyle}/></span>Comets</p>
        <p onClick={()=>setDisplay("asteroids")}><span><GiAsteroid style={iconStyle}/></span>Asteroids</p>
      
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
