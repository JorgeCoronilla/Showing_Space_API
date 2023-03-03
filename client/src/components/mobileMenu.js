import React from 'react'
import { IoMoonOutline, IoPlanetOutline } from "react-icons/io5";
import { IoIosPlanet } from "react-icons/io";
import { GiCometSpark, GiAsteroid } from "react-icons/gi"

export const MobileMenu = ({ setDisplay, setDisplayMobile, displayMobile }) => {
  const iconStyle = { fontSize: "20px", position: "relative", top: "3px", marginRight: "10px" }

  return (
    <div className='dropDownMenu'>

      <div className='dropMenuContainer'>
        <div>
          <p onClick={() => {
            setDisplay("planets");
            setDisplayMobile(!displayMobile)
          }}><span><IoPlanetOutline style={iconStyle} /></span>Planets</p>
          <p onClick={() => {
            setDisplay("dwarf-planets");
          }}><span><IoIosPlanet style={iconStyle} /></span>Dwarf Planets</p>
          <p onClick={() => {
            setDisplay("moons");
            setDisplayMobile(!displayMobile)
          }}><span><IoMoonOutline style={iconStyle} /></span>Moons</p>
          <p onClick={() => {
            setDisplay("comets");
            setDisplayMobile(!displayMobile)
          }}><span><GiCometSpark style={iconStyle} /></span>Comets</p>
          <p onClick={() => {
            setDisplay("asteroids");
            setDisplayMobile(!displayMobile)
          }}><span><GiAsteroid style={iconStyle} /></span>Asteroids</p>
        </div>
      </div>
    </div>
  )
}
