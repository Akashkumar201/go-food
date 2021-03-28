import React from 'react'
import banner from '../src/images/banner3.png'


import "./index.css"


const Header = (props) =>{
    return(
        <>
         <img src={banner} alt="banner"  className="img_head"/>
         <div className="text-center my-3 container">
                     <h2 className="head2"><u>Welcome To aCooks:</u></h2>  
                     <div className="row my-3" >

                    <input className="form-control  text-center col-md-6 mx-auto " placeholder="Find Your Recipe Here..." onChange={props.inputSearch} value={props.search} />
                    
                    </div>
                    <button className="btn btn-outline-success my-2 my-sm-0 my-2 " onClick={props.onSearch}>Search Recipe</button>
                    </div>
                   
        </>
    )
}

export default Header;
