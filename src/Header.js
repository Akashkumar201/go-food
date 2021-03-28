import React from 'react'
import banner from '../src/img/wall.jpg'


import "./index.css"


const Header = (props) =>{
    return(
        <>
         <img src={banner} alt="banner"  className="img_head"/>
         <div className="text-center my-3 container">
                     <h2 className="head2"><b>Love to Eeat Search and Eeat Togather</b></h2>  
                     <div className="row my-3" >

                    <input className="form-control  text-center col-md-6 mx-auto " placeholder="Find The Food Here" onChange={props.inputSearch} value={props.search} />
                    
                    </div>
                    <button className="btn btn-outline-success my-2 my-sm-0 my-2 " onClick={props.onSearch}>Click Me!</button>
                    </div>
                   
        </>
    )
}

export default Header;
