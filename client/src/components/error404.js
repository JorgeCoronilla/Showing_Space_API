import React from 'react'
import error404 from '../media/error404.jpg'
import { useNavigate } from 'react-router-dom'

export const Error404 = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  }

  return (
    <div className='error404'>
      <h1>Oooops</h1>
      <h3>Something went wrong</h3>
      <img src={error404} alt="Error 404" />
      <button onClick={home}>Take me home!</button>
    </div>
  )
}
