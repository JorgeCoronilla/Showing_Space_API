import React, { useState } from 'react'
import { SlMagnifier } from "react-icons/sl";
import { SearchList } from './searchList';

export const Search = ({ items }) => {
  const [filterdList, setFilteredList] = useState([])
  const iconStyle = { fontSize: "8px", position: "relative", bottom: "14px", left: "9px" }

  const handleChange = (e) => {
    const result = items.filter(function (planet) { return planet.englishName.toLowerCase().startsWith(e.target.value.toLowerCase()) || planet.englishName.toLowerCase().includes(e.target.value.toLowerCase()) })
    setFilteredList(result)
  }

  const resetSearch = (e) => {
    e.target.value=""
    setFilteredList("")
  }


  return (
    <div>
      <div className='fg--search'>
        <input type="text" className="input" placeholder="Search" onChange={handleChange} onBlur={resetSearch} />
        <button type="submit"><SlMagnifier style={iconStyle} /></button>
      </div>
      {filterdList.length > 0 &&
        <SearchList filterdList={filterdList} />
      }

    </div>
  )
}
