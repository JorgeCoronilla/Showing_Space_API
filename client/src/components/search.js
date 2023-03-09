import React, { useState, useEffect } from 'react'
import { SearchList } from './searchList';

export const Search = ({ items, setNewItems }) => {
  const [filterdList, setFilteredList] = useState([])
  const [backUpList, setBackupList] = useState([])

  useEffect(() => {
    if (backUpList.length<items.length) {
      setBackupList(items)
    }

  }, [filterdList])
  
  const handleChange = (e) => {

    if (items.length<2){setNewItems(backUpList)}
    const result = items.filter(function (planet) { return planet.englishName.toLowerCase().startsWith(e.target.value.toLowerCase()) || planet.englishName.toLowerCase().includes(e.target.value.toLowerCase()) })
    if (result.length !== 0) { setFilteredList(result) }
    else {
      setFilteredList([ { "englishName": "No results", "id": "No results"} ])
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (filterdList.length===1 && filterdList[0].id==="No results") { 
       setNewItems(backUpList)
       } else {
        setNewItems(filterdList)
       
      }
    }
  };

  const resetSearch = (e) => {
    e.target.value = ""
    setFilteredList("")
  }

  return (
    <div>
      <div className='fg--search'>
        <input type="text" className="input" placeholder="Search" onChange={handleChange} onBlur={resetSearch} onKeyDown={handleKeyDown}/>
      </div>
      {filterdList.length > 0 &&
        <SearchList filterdList={filterdList} />
      }

    </div>
  )
}
