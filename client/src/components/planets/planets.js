import React, { useEffect, useState, useContext } from 'react';
import { Search } from '../search';
import { PlanetsFilter } from '../planets/planetsFilter';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { sortBy } from '../../helpers/sortItems';
import { fetchAllPlanetData } from '../../helpers/getFromApi';
import loadingGif from '../../media/loading.gif'
import { CreateMainContext } from '../../providers/createMainProvider';
export const Planets = () => {
  // const { totalPlanets, currentPage,recordsPerPage } = useContext(CreateMainContext);
  const [sortCriteria, setSorCriteria] = useState('uid');
  const [planets2, setPlanets2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [urlPlanets, setUrlPlanets] = useState('https://www.swapi.tech/api/planets');
  const [totalPlanets, setTotalPlanets] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [planets3, setPlanets3] = useState([])

  const previous = () => {
    console.log("previous")
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  const next = () => {
    console.log("next")
    if (currentPage !== nPages) setCurrentPage(currentPage + 1)
  }

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
      console.log(planets2)
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

      <div>
        holas
        {planets2.length >1 ?
          <div>
            {currentRecords.map((planet, index) => {
              return (
                <p key={planet.properties._id}>{planet.properties.name}</p>
              )
            })}
          </div>
          :
          <div>
            <img src={loadingGif} alt="Loading Data" />
            <p>Loading data...</p>
          </div>
        }
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
