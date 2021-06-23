import React from 'react'
import Typed from 'react-typed';

function Header() {
    return (
        <div className="header-wrapper">
          <div className="main-info">
              <h1>Arzu Badalzada Resmi veb sehifesi</h1>
              <Typed
              className="typed-text"
                strings={[
                    'Veb proqramlasdirma',
                    'Telebe IT',
                    'Azerbaycan Dovleti']}
                    typeSpeed={40}
                    backSpeed={20}       
                    loop >
                  
                </Typed>
              <a href="#" className="btn-main-offer">Bizimle elaqe</a>
             
              </div> 

        </div>
    )
}

export default Header
