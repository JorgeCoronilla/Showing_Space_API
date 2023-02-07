import React from 'react'

export const PlanetsFilter = ({ setSorCriteria }) => {

  const options = [
    {value: 'name', text: 'Planet name'},
    {value: 'uid', text: 'Uid'}
  ];
  const handleChange = e => {
    console.log(e.target.value)
    setSorCriteria(e.target.value)
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

/*
   <option value="name">Planet name</option>
          <option value="population">Population</option>
          <option value="climate">Climate</option>
          <option value="diameter">Diameter</option>
          <option value="terrain">Terrain</option>
          <option value="rotation_period">Rotation_period</option>
          <option value="orbital_period">Orbital_period</option>
          <option value="gravity">Gravity</option>
          <option value="surface_water">Surface_water</option>
          */