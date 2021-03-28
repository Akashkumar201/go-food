import React from 'react'
import gif from '../src/images/giphy.gif'
import "./index.css"


const Footer = () =>{
    return(
        <div className="row">
            <div className="col-md-3 mx-auto">
             <img src={gif} width="300" height="300" className="" alt="food"/>
            </div>
        </div>
      

    )
}

export default Footer;