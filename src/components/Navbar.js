import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return (
      
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="#"> <img className="logo" src={logo}></img></a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon  icon={faBars} style={{color:"#f9ab00"}}/> 
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="home" smooth={true} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="nav-item">
                        <Link to="about" smooth={true} className="nav-link" href="#">Haqqinda</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="services" smooth={true} className="nav-link" href="#">Xidmetler</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="experience" smooth={true} className="nav-link" href="#">Tecrube</Link>
                    </li>          

            </ul>    
        </div>
      </nav>
            )
}

            export default Navbar
