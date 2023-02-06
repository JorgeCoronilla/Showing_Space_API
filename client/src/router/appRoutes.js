import React from 'react'
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { Error404 } from '../components/error404';

export const AppRoutes = () => {
  return (
    <div>
      <Routes>

        {/*SPA*/}
        <Route path="/" element={<App/>} />

        {/*Error 404*/}
        <Route path="*" element={<Error404/>} />
        
      </Routes>
    </div>
  )
}