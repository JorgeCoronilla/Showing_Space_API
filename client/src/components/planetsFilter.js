import React from 'react'

export const PlanetsFilter = () => {
  return (
    <div>
         <div>
                <select name="Planets" id="planets">
                    <option value="name">Planet name</option>
                    <option value="population">Population</option>
                    <option value="climate">Climate</option>
                    <option value="diameter">Diameter</option>
                    <option value="terrain">Terrain</option>
                    <option value="rotation_period">Rotation_period</option>
                    <option value="orbital_period">Orbital_period</option>
                    <option value="gravity">Gravity</option>
                    <option value="surface_water">Surface_water</option>
                </select>
            </div>
    </div>
  )
}
