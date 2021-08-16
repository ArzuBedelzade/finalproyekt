import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="container"> 
               <div className="row">
                   <div className="col-lg-4 col-md-6 col-sm-6"></div>
                      <div className="d-flex">
                    <p>Baki şəhəri, Səbail rayonu</p>
                    </div>

                    <div className="d-flex">
                    <a href="tel:0552473031">+994552473031</a>
                    </div>

                    <div className="d-flex">
                    <p>info@arzubedelzade.com</p>
                    </div>
            </div>

            <div className="col-lg-3 col-md-2 col-sm-6">

                <div className="row">
                   <div className="col">
                     <a className="footer-nav">Ana səhifə</a>
                     <br>
                     </br>
                     <a className="footer-nav">Xidmetlerimiz</a>
                     <br>
                     </br>
                     <a className="footer-nav">Tecrube</a>
                     <br>
                     </br>
                   </div>

                   <div className="col">
                     <a className="footer-nav">Haqqimda</a>
                     <br>
                     </br>
                     <a className="footer-nav">Bizimle elaqe</a>
                     <br>
                     </br>
                   </div>
                </div>

                   <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                      <p className="pt-3 text-center">
                          Copyright &copy; {new Date().getFullYear()}&nbsp; IT Brains Training Center 

                      </p>

                   </div>

                 </div>
            </div>
        </div>
    )
}

export default Footer
