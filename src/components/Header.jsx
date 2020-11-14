import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import logo from '../OLX-logo.png'
import searchBtn from '../search-btn.png'
import sell from '../sell.png'

import Button from 'react-bootstrap/Button';

function Header() {

    return(
        <div>

            <img src={logo} className='logo' alt="logo"/>
        
            <input aria-label='region' type="search" name='region' size='30' placeholder='Search City' className='region-search' />
            <input aria-label='category' type="search" name='category' size='60' placeholder="Find Cars, Mobile Phones & more.." className='region-search' />
            <input type="image" src={searchBtn} className='searchBtn' name='searchBtn' />
            <input type="image" src={sell} className='sellBtn' name='sellBtn' />
            

        </div>
    );
}

export default Header;