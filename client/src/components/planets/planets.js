import React, { useEffect, useState } from 'react';
import { Search } from '../search';
import { Filter } from '../filter';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { sortBy } from '../../helpers/sortItems';
import { PlanetCard } from './planetCard';


export const Planets = ({display}) => {
  const [sortCriteria, setSorCriteria] = useState('name');
  const [planets2, setPlanets2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPlanets, setTotalPlanets] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(0);
  const [refresh, setRefresh] = useState(true)
  const iconStyle = { fontSize: "16px", color: "#e0634b" }

  useEffect(() => {
    setLoading(false)
  }, [refresh])

  useEffect(() => {
    planets2.sort(sortBy(sortCriteria))
    setRefresh(!refresh)
  }, [sortCriteria])

  useEffect(() => {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/?exclude=isPlanet,%20dimension,%20alternativeName&filter[]=isPlanet,eq,true
      `)
      .then((response) => response.json())
      .then((response) => {
        setPlanets2(response.bodies);
        console.log(response.bodies);
        setTotalPlanets(response.bodies.length)
        if (response.bodies.length < 10) { setRecordsPerPage(response.bodies.length) } else { setRecordsPerPage(10) }
        setLoading(false)
      })

    return () => {
      planets2.sort(sortBy(sortCriteria))
    }
  }, [loading])

  const previous = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
      setRecordsPerPage(recordsPerPage => recordsPerPage + 10)
    }
  }

  const next = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = planets2.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(planets2.length / recordsPerPage)

  return (
    <div className='cardsConatinerTitle'>
      <h3>Planets</h3>
      <div className='underLine'></div>
      <div>
        <div className='searchContainer'>

          <div>
            <Search items={planets2} />
          </div>

          <div>
            <Filter display={display} setSorCriteria={setSorCriteria} sortCriteria={sortCriteria} />
          </div>

        </div>

        <PlanetCard planets2={planets2} currentRecords={currentRecords} />

      </div>

      {planets2.length > 1 &&
       <div className='pageBrowserContainer'>
       <div className='pageBrowser'>
          <button onClick={previous}><HiArrowCircleLeft /></button>
          <p>{currentPage} to {recordsPerPage} of {totalPlanets}</p>
          <button onClick={next}><HiArrowCircleRight /></button>
        </div>
        </div>}

    </div>
  )
}
