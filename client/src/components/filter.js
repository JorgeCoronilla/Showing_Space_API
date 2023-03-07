import React from 'react'
import { planetOptions, dwarfOptions, moonOptions } from '../helpers/filterOptions';
import { AiOutlineControl } from "react-icons/ai";

export const Filter = ({ setSorCriteria, display }) => {
  const iconStyle2 = { fontSize: "22px", position: "relative", top: "1px", color: "#27536b" }
  let options

  switch (display) {
    case "planets":
      options = planetOptions;
      break;
    case "dwarf-planets":
      options = dwarfOptions;
      break;
      case "moons":
      options = moonOptions;
      break;
    default:
      options = planetOptions;
  }

  const handleChange = e => {
    setSorCriteria((sortCriteria) => (sortCriteria = e.target.value));
  }

  return (
    <div>
      {options &&
        <div className='filters'>
          <AiOutlineControl style={iconStyle2} />
          <select name="Planets" id="planets" onChange={handleChange}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}

          </select>
        </div>
      }
    </div>
  )
}

/*
=[
    { value: 'englishName', text: 'name' },
    { value: 'gravity', text: 'Gravity' }]*/
