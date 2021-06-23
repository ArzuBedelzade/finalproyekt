import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'

const Services =() => {
    return (
        <div className="services" id="services">
            <h1 className="py-5">Xidmetlerim</h1>
        <div className="container">
              
              <div className="row">
               
               <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                        <h3>4 ayliq front-end </h3>
                        <p>React kitabxanadir</p>

                      </div>

                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="box">
                        <div className="circle"><FontAwesomeIcon  className="icon" icon={faFileCode} size="2x" /></div>
                        <h3>JavaScript proqramlasdirma dilidir</h3>
                        <p>Azerbaijan</p>

                      </div>

                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="box">
                        <div className="circle"><FontAwesomeIcon  className="icon" icon={faFileCode} size="2x"/></div>
                        <h3>JavaScript proqramlasdirma dilidir</h3>
                        <p>Azerbaijan</p>

                      </div>

                </div>





              </div>
        </div>
        
        
        
        
        </div>



    )
}

export default Services
