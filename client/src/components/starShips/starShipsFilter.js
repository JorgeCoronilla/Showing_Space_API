import React from 'react'
import {starShipsOptions}  from '../../helpers/filterOptions';

export const StarShipsFilter = ({ setSorCriteria }) => {

    const options = starShipsOptions;
    const handleChange = e => {
      setSorCriteria((sortCriteria) => (sortCriteria=e.target.value));
    }
  
  return (
    <div>
    <div>
      <select name="Planets" id="planets" onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
     
      </select>
    </div>
  </div>
  )
}
