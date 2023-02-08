import React from 'react'
import {planetOptions}  from '../../helpers/filterOptions';
export const PlanetsFilter = ({ setSorCriteria }) => {

  const options = planetOptions;
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
