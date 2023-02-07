import React, { useEffect, useState } from 'react';
import { Search } from '../search';
import { PlanetsFilter } from '../planets/planetsFilter';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { sortBy } from '../../helpers/sortItems';
import { fetchAllData } from '../../helpers/getFromApi'; 

export const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [urlPlanets, setUrlPlanets] = useState('https://www.swapi.tech/api/planets?page=1&limit=12');
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [totalPlanets, setTotalPlanets] = useState();
  const [totalPages, setTotalPages] = useState();
  const [sortCriteria, setSorCriteria] = useState('uid');

  const previous = () => { 
    if (previousPage) {setUrlPlanets(previousPage)}
  }

  const next = () => { 
    if (nextPage) {setUrlPlanets(nextPage)}
  }

  useEffect(() => {
    fetchData()
    fetchAllData(totalPlanets) 
    console.log(fetchAllData(totalPlanets)) 
  }, [])
  


  const fetchData = () => {
    return fetch(urlPlanets)
          .then((response) => response.json())
          .then((data) => {
            setPlanets(data.results);
            setNextPage(data.next);
            setPreviousPage(data.previous);
            setTotalPages(data.total_pages);
            setTotalPlanets(data.total_records);
            console.log(data)
            console.log(data.results.sort(sortBy(sortCriteria)))
          });
  }

  return (
  <div>
    <h3>planets</h3>
    <div> 
        <Search />
        <PlanetsFilter setSorCriteria={setSorCriteria}/>     
      </div>
      {planets.length >1 &&
      <div>
        {planets.map ((planet, index) => { return (
          <p>{planet.name}</p>
        )       
        })}
       </div>
      }

{planets.length >1 &&
    <div className='pageBrowser'>
      <button onClick={previous}><HiArrowCircleLeft/></button>
     
      <p>{planets[0].uid} to {planets.length} of {totalPlanets}</p>
      <button onClick={next}><HiArrowCircleRight/></button>
    </div>}
      </div>
  )
  }