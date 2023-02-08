import React, { useEffect, useState, useContext } from 'react';
import { Search } from '../search';
import { PlanetsFilter } from '../planets/planetsFilter';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { sortBy } from '../../helpers/sortItems';
import { fetchAllPlanetData } from '../../helpers/getFromApi';
import loadingGif from '../../media/loading.gif'
import { CreateMainContext } from '../../providers/createMainProvider';
import {planetOptions}  from '../../helpers/filterOptions';
import { PlanetCard } from './planetCard';


export const Planets = () => {
  // const { totalPlanets, currentPage,recordsPerPage } = useContext(CreateMainContext);
  const [sortCriteria, setSorCriteria] = useState('name');
  const [planets2, setPlanets2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [urlPlanets, setUrlPlanets] = useState('https://www.swapi.tech/api/planets');
  const [totalPlanets, setTotalPlanets] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const options = planetOptions;

  const previous = () => {
    console.log("previous")
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  const next = () => {
    console.log("next")
    if (currentPage !== nPages) setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    planets2.sort(sortBy(sortCriteria))
  }, [sortCriteria])

  useEffect(() => {
    fetchData()
    if (loading) {
      fetchAllPlanetData(15).then((response) => {
        console.log("terminó")
        setPlanets2(response);
        setLoading(false)
      })
    }
    return () => {
      planets2.sort(sortBy(sortCriteria))
    }
  }, [totalPlanets, planets2, loading])




  const fetchData = () => {
    return fetch(urlPlanets)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTotalPlanets(data.total_records);
        // console.log(data.results.sort(sortBy(sortCriteria)))
      });
  }


  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = planets2.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(planets2.length / recordsPerPage)

  return (
    <div>
      <h3>planets</h3>
      <p>{sortCriteria}</p>
      <div>
        <div className='searchContainer'>
          <div><Search /></div>
          
          <div><PlanetsFilter planets2={planets2} setSorCriteria={setSorCriteria} sortCriteria={sortCriteria} /> </div>
 
               </div>
     <PlanetCard planets2={planets2} currentRecords={currentRecords}/>
      </div>
      {planets2.length > 1 &&
        <div className='pageBrowser'>
          <button onClick={previous}><HiArrowCircleLeft /></button>
          <p>{currentPage} to {recordsPerPage} of {totalPlanets}</p>
          <button onClick={next}><HiArrowCircleRight /></button>
        </div>}
    </div>
  )
}


/*
  */
