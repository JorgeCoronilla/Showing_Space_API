import React, { useState } from 'react'
import { SlMagnifier, SlTarget } from "react-icons/sl";
import { SearchList } from './searchList';

export const Search = ({planets2}) => {
  const [searchValue, setSearchValue]=useState("")
  const [filterdList, setFilteredList]=useState([])

  const iconStyle = { fontSize: "14px", position: "relative", bottom: "18px", left: "5px" }
  
  const handleChange = (e) => {
    setSearchValue(e.target.value.toLowerCase())
    
const result = planets2.filter(function (planet) { return planet.name.startsWith(searchValue) || planet.name.includes(searchValue)})
    console.log(result)
    setFilteredList(result)
  }


  return (
    <div>
    <div className='form-group fg--search'>
      <input type="text" className="input" placeholder="search" onChange={handleChange} />
        <button type="submit"><SlMagnifier style={iconStyle}/></button>
    </div>
    {filterdList.length>0 && 
    <SearchList filterdList={filterdList}/>
    }
    
    </div>
  )
}
