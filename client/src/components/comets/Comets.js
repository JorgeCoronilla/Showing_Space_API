import React, { useEffect, useState } from 'react';
import { Search } from '../search';
import { Filter } from '../filter';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { sortBy } from '../../helpers/sortItems';
import { CometsCard } from './CometsCard';

export const Comets = ({ display }) => {

  const [sortCriteria, setSorCriteria] = useState('name');
  const [comets, setComets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalComets, setTotalComets] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(0);
  const [refresh, setRefresh] = useState(true)


  useEffect(() => {
    setLoading(false)
  }, [refresh])

  useEffect(() => {
    comets.sort(sortBy(sortCriteria))
    setRefresh(!refresh)
  }, [sortCriteria])

  useEffect(() => {
    fetch(`https://api.le-systeme-solaire.net/rest/bodies/?filter[]=bodyType,eq,Comet`)
      .then((response) => response.json())
      .then((response) => {
        setComets(response.bodies);
        console.log(response.bodies);
        setTotalComets(response.bodies.length)
        if (response.bodies.length < 10) { setRecordsPerPage(response.bodies.length) } else { setRecordsPerPage(10) }
        setLoading(false)
      })

    return () => {
      comets.sort(sortBy(sortCriteria))
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
  const currentRecords = comets.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(comets.length / recordsPerPage)

  return (
    <div className='cardsConatinerTitle'>
      <h3>Comets</h3>
      <div className='underLine'></div>
      <div>
        <div className='searchContainer'>

          <div>
            <Search items={comets} />
          </div>

          <div>
            <Filter display={display} setSorCriteria={setSorCriteria} sortCriteria={sortCriteria} />
          </div>

        </div>

        <CometsCard comets={comets} currentRecords={currentRecords} />

      </div>

      {comets.length > 1 &&
        <div className='pageBrowserContainer'>

          <div className='pageBrowser'>
            <button onClick={previous}><HiArrowCircleLeft /></button>
            <p>{currentPage} of {nPages} | {totalComets} comets</p>
            <button onClick={next}><HiArrowCircleRight /></button>
          </div>

        </div>}

    </div>
  )
}
