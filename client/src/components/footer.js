import React from 'react'
import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className='footer'>
      <p>Jorge Coronilla &#169; 2023</p>
      <div className='footerIcons'>
        <p><BsGithub onClick={(e) => {window.location.href =('https://github.com/JorgeCoronilla')}}/></p>
        <p><BsLinkedin onClick={(e) => {window.location.href =('https://www.linkedin.com/in/jorge-coronilla-naranjo-20019376?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKlElQHhES3qVbPRh%2Buw9Dw%3D%3D')}}/></p>
        <p><BsEnvelopeFill onClick={(e) => {window.location.href ='mailto:jorge.coronilla.naranjo@gmail.com' }}/></p>
      </div>

    </div>
  )
}
