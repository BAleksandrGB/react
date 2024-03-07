import React from 'react';
import '../styles/_header.css';
import Logo from './elements/Logo';
import {LOGO} from '../Data/data'



export default function Header() {
    return (
        <div className='header'>
            <Logo logonName={LOGO}/>
            
        </div>
    )
}




