import React, {useEffect} from 'react'
import { sortBy } from '../../helpers/sortItems';
import {planetOptions}  from '../../helpers/filterOptions';
export const PlanetsFilter = ({ setSorCriteria, sortCriteria, planets2 }) => {

  const options = planetOptions;
  const handleChange = e => {
    console.log(e.target.value)
    //setSorCriteria(e.target.value)
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
