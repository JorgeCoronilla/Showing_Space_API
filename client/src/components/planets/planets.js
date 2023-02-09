import React, { useEffect, useState, useContext } from 'react';
import { Search } from '../search';
import { PlanetsFilter } from '../planets/planetsFilter';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { sortBy } from '../../helpers/sortItems';
import { fetchAllPlanetData } from '../../helpers/getFromApi';
import { CreateMainContext } from '../../providers/createMainProvider';
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
  const [refresh, setRefresh] = useState(true)


  useEffect(() => {
    setLoading(false)
  }, [refresh])

  useEffect(() => {
    planets2.sort(sortBy(sortCriteria))
    setRefresh(!refresh)
  }, [sortCriteria])

  useEffect(() => {
    fetchData()
   
      fetchAllPlanetData(totalPlanets).then((response) => {
        setPlanets2(response);
        setLoading(false)
      })
    
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
      });
  }

  const previous = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  const next = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1)
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = planets2.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(planets2.length / recordsPerPage)

  return (
    <div className='cardsConatinerTitle'>
      <h3>Planets</h3>
      <div>
        <div className='searchContainer'>
          
          <div>
            <Search  planets2={planets2} />
          </div>

          <div>
            <PlanetsFilter planets2={planets2} setSorCriteria={setSorCriteria} sortCriteria={sortCriteria} /> 
          </div>

        </div>

          <PlanetCard planets2={planets2} currentRecords={currentRecords} />
      
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
