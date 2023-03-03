import React, { useState } from 'react';
import { IoMoonOutline, IoPlanetOutline } from "react-icons/io5";
import { IoIosPlanet } from "react-icons/io";
import { GiCometSpark, GiAsteroid } from "react-icons/gi"
import solarSystemIcon from '../media/solar-system.png'
import { GoThreeBars } from "react-icons/go";
import { MobileMenu } from './mobileMenu';

export const Menu = ({ setDisplay }) => {
  const [displayMobile, setDisplayMobile] = useState(false)
  const iconStyle = { fontSize: "13px", position: "relative", top: "3px" }
  const BurgerIconStyle = {fontSize: "35px", margin: "2px 35px 0 0"}

  return (

    <div className='menu'>
      <div className='menuBig'>
        <div className='menuList'>
          <img src={solarSystemIcon} alt="Solar System Icon" />
          <h3>SSB</h3>
          <div className='menudesktop'>
            <p onClick={() => setDisplay("planets")}><span><IoPlanetOutline style={iconStyle} /></span>Planets</p>
            <p onClick={() => setDisplay("dwarf-planets")}><span><IoIosPlanet style={iconStyle} /></span>Dwarf Planets</p>
            <p onClick={() => setDisplay("moons")}><span><IoMoonOutline style={iconStyle} /></span>Moons</p>
            <p onClick={() => setDisplay("comets")}><span><GiCometSpark style={iconStyle} /></span>Comets</p>
            <p onClick={() => setDisplay("asteroids")}><span><GiAsteroid style={iconStyle} /></span>Asteroids</p>

          </div>
        </div>

      </div>
      <div className='menumobile'>

        <img src={solarSystemIcon} alt="Solar System Icon" />
        <h3>SSB</h3>
        <GoThreeBars style={BurgerIconStyle}  onClick={() => setDisplayMobile(!displayMobile)} />
      </div>
      {displayMobile &&
        <div>
          <MobileMenu setDisplay={setDisplay} iconStyle={iconStyle} setDisplayMobile={setDisplayMobile} displayMobile={displayMobile}/>
        </div>
      }
    </div>

  )
}
