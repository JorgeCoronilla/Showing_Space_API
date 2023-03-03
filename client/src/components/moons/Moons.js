import React, { useEffect, useState } from 'react';
import { Search } from '../search';
import { Filter } from '../filter';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { sortBy } from '../../helpers/sortItems';
import { MoonCard } from './MoonCard';

export const Moons = ({ display }) => {
  const [sortCriteria, setSorCriteria] = useState('name');
  const [moons, setMoons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalMoons, setTotalMoons] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(0);
  const [refresh, setRefresh] = useState(true)


  useEffect(() => {
    setLoading(false)
  }, [refresh])

  useEffect(() => {
    moons.sort(sortBy(sortCriteria))
    setRefresh(!refresh)
  }, [sortCriteria])

  useEffect(() => {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/?filter[]=bodyType,eq,Moon`)
      .then((response) => response.json())
      .then((response) => {
        setMoons(response.bodies);
        console.log(response.bodies);
        setTotalMoons(response.bodies.length)
        if (response.bodies.length < 10) { setRecordsPerPage(response.bodies.length) } else { setRecordsPerPage(10) }
        setLoading(false)
      })

    return () => {
      moons.sort(sortBy(sortCriteria))
    }
  }, [loading])

  const previous = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
      // setRecordsPerPage(recordsPerPage => recordsPerPage + 10)
    }
  }

  const next = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = moons.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(moons.length / recordsPerPage)

  return (
    <div className='cardsConatinerTitle'>
      <h3>Moons</h3>
      <div className='underLine'></div>
      <div>
        <div className='searchContainer'>
          <div>
            <Search items={moons} />
          </div>
          <div>
            <Filter display={display} setSorCriteria={setSorCriteria} sortCriteria={sortCriteria} />
          </div>
        </div>
        <MoonCard moons={moons} currentRecords={currentRecords} />
      </div>

      {moons.length > 1 &&
        <div className='pageBrowserContainer'>
          <div className='pageBrowser'>
            <button onClick={previous}><HiArrowCircleLeft /></button>
            <p>{currentPage} to {recordsPerPage} of {totalMoons}</p>
            <button onClick={next}><HiArrowCircleRight /></button>
          </div>
        </div>
      }

    </div>
  )
}
