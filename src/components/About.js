import React from 'react'
import author from '../author.jpg'

function About() {
    return (
        <div className="container py-5">
            <div className="row">
                 <div className="col-lg-6 col-xm-12">
                        <div className="photo-wrappar mb-5">
                              <img className="profile-img" src={author} alt="Arzu Badalzada"></img>
                        </div>
                 </div>

                 <div className="col-lg-6 col-xm-12">
                         <h1 className="about-heading">Haqqimda</h1>
                         <p>Men Arzu Badalzada Informasiya ve Texnologiyalari 1ci kurs telebesiyem</p>
                 </div>
             
            </div>
        </div>
    )
}

export default About
