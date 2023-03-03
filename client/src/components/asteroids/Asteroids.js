import React, { useEffect, useState } from 'react';
import { Search } from '../search';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { sortBy } from '../../helpers/sortItems';
import { AsteroidCard } from './AsteroidCard';
import { Filter } from '../filter';

export const Asteroids = ({ display }) => {


  const [sortCriteria, setSorCriteria] = useState('name');
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalAsteroids, setTotalAsteroids] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(0);
  const [refresh, setRefresh] = useState(true)


  useEffect(() => {
    setLoading(false)
  }, [refresh])

  useEffect(() => {
    asteroids.sort(sortBy(sortCriteria))
    setRefresh(!refresh)
  }, [sortCriteria])

  useEffect(() => {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/?filter[]=bodyType,eq,Asteroid`)
      .then((response) => response.json())
      .then((response) => {
        setAsteroids(response.bodies);
        setTotalAsteroids(response.bodies.length)
        if (response.bodies.length < 10) { setRecordsPerPage(response.bodies.length) } else { setRecordsPerPage(10) }
        setLoading(false)
      })

    return () => {
      asteroids.sort(sortBy(sortCriteria))
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
  const currentRecords = asteroids.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(asteroids.length / recordsPerPage)

  return (
    <div className='cardsConatinerTitle'>
      <h3>Asteroids</h3>
      <div className='underLine'></div>
      <div>
        <div className='searchContainer'>
          <div>
            <Search items={asteroids} />
          </div>

          <div>
            <Filter display={display} setSorCriteria={setSorCriteria} sortCriteria={sortCriteria} />
          </div>

        </div>

        <AsteroidCard asteroids={asteroids} currentRecords={currentRecords} />

      </div>

      {asteroids.length > 1 &&
        <div className='pageBrowserContainer'>
          <div className='pageBrowser'>
            <button onClick={previous}><HiArrowCircleLeft /></button>
            <p>{currentPage} to {recordsPerPage} of {totalAsteroids}</p>
            <button onClick={next}><HiArrowCircleRight /></button>
          </div>
        </div>}

    </div>
  )
}
