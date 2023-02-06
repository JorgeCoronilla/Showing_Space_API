import React from 'react';
import { HiBell } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";

export const Header = () => {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <h1>Imperial destroyer center</h1>
            </div>
            <div className='headerIcons'>
                <p><HiBell /></p>
                <p><IoPerson /></p>
            </div>
        </div>
    )
}
