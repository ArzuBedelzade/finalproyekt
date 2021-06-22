import React from 'react'
import logo from '../itbrains logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="#"> <img className="logo" src={logo}></img></a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon  icon={faBars} style={{color:"#f9ab00"}}/> 
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Haqqinda</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Xidmetler</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Tecrube</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Portofolio</a>
                    </li>

            </ul>    
        </div>
      </nav>
            )
}

            export default Navbar
