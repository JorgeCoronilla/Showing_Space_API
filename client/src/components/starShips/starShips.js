import React, {useEffect, useState} from 'react'
import { Search } from '../search';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { sortBy } from '../../helpers/sortItems';
import { fetchAllStarshipsData } from '../../helpers/getFromApi';
import { StarShipsFilter } from './starShipsFilter';
import { StarShipCard } from './starShipCard';

export const StarShips = () => {

  const [sortCriteria, setSorCriteria] = useState('name');
  const [starShips, setStarShips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [urlStarShips] = useState('https://www.swapi.tech/api/starships');
  const [totalStarShips, setTotalStarShips] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [refresh, setRefresh] = useState(true)


  useEffect(() => {
    setLoading(false)
  }, [refresh])

  useEffect(() => {
    starShips.sort(sortBy(sortCriteria))
    setRefresh(!refresh)
  }, [sortCriteria])

  useEffect(() => {
    if (starShips.length<2){
      fetchData()
     
        fetchAllStarshipsData(totalStarShips).then((response) => {
          setStarShips(response);
          setLoading(false)
        })
      
    }
   
    return () => {
      starShips.sort(sortBy(sortCriteria))
    }
  }, [totalStarShips, starShips, loading])

  const fetchData = () => {
    return fetch(urlStarShips)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTotalStarShips(data.total_records);
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
  const currentRecords = starShips.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(starShips.length / recordsPerPage)


  return (
    <div className='cardsConatinerTitle'>
      <h3>StarShips</h3>
      <p>{sortCriteria}</p>
      <div>
        <div className='searchContainer'>
          
          <div>
            <Search />
          </div>

          <div>
            <StarShipsFilter starShips={starShips} setSorCriteria={setSorCriteria} sortCriteria={sortCriteria} /> 
          </div>

        </div>

          <StarShipCard starShips={starShips} currentRecords={currentRecords} />
      
      </div>

      {starShips.length > 1 &&
        <div className='pageBrowser'>
          <button onClick={previous}><HiArrowCircleLeft /></button>
          <p>{currentPage} to {recordsPerPage} of {totalStarShips}</p>
          <button onClick={next}><HiArrowCircleRight /></button>
        </div>}

    </div>
  )
}
