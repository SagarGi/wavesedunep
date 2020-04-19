import React from 'react'
import './footer.css'

const Footer = () =>
{
    return(
        <div className = "main-footer">
            <div class = "container bg-dark">

                <div className = "row">
                    <div className = "col p-2 text-center">
                      {/* <p className = "copy text-center">©2020 Waves Education Nepal all right reserved.</p> */}
                      ©2020 Waves Education Nepal all right reserved.
                    </div>
                     <div className = "col text-center p-2">
                      {/* <p className = "copy text-center">Developed By : Sagar Gurung</p> */}
                      Developed By : Sagar Gurung
                    </div>
                </div>        
            </div>
         
        </div>
    )
}

export default Footer