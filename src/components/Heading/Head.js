import React from 'react'
import './Head.css'

const Head = () => {
  return (<>
    
    <div className='container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-content flex-column' style={{height: "50vh"}}>
    
    <input className="searchbar" type="text" placeholder='Search' style={{ backgroundColor:"white",border:"1px solid white",margin:"0 0 50px 0"}}/>

      <h1 style={{fontSize: "50px", color:"olive"}}>NEWS Point</h1>
      <h5>Makes your dailies informative.</h5>
    </div>
    </>
  )
}
export default Head
