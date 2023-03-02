import React from 'react'
import {planetOptions}  from '../../helpers/filterOptions';
import { AiOutlineControl} from "react-icons/ai";

export const PlanetsFilter = ({ setSorCriteria }) => {
    const iconStyle2 = { fontSize: "16px", position: "relative", top: "1px",color: "#27536b"}

  const options = planetOptions;
  const handleChange = e => {
    setSorCriteria((sortCriteria) => (sortCriteria=e.target.value));
  }

  return (
    <div>
      <div className='filters'>
      <AiOutlineControl style={iconStyle2}  />
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
