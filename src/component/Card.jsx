import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
const API_IMG = "https://image.tmdb.org/t/p/w500/"
import { IoIosCloseCircle } from "react-icons/io";

function truncateDescription(title, maxLength) {
  if (title.length <= maxLength) {
    return title;
  } else {
    return title.slice(0, maxLength) + ' ...';
  }
}

const Card = ({title , poster_path , vote_average , release_date ,overview}) => {
  
  const [show , setShow] = useState(false)
  
  const handleShow=()=>setShow(true)
  const handleClose=()=>setShow(false)
  
  
 
    const truncatedDescription = truncateDescription(title, 18);
  
    // console.log(item.title);

    
  return (
    <>
    
    <div>
      <div className='movie'>
        <img src={API_IMG+poster_path} className='poster'/>
        <div className='movie-details'>
            <div className='box'>
                <h3 className='title'>{truncatedDescription}</h3>
                <button className='view' onClick={handleShow}>View More</button>


            </div>
        </div>
      </div>
     </div>
  
                            <Modal show={show} onHide={handleClose} style={{  width:"100%"  , height:"80%"  }} className='modal'>
                           

                            
<div className='row' style={{height:"100%" , display:"flex" , alignItems:"center"}}>
  <div className='col-md-12 col-sm-12' >
<div class="card mb-3 ii" style={{padding:"30px 80px" , display:"flex" ,height:"100%"  , justifyContent:"center" }}>
   
  <div class="rows" style={{backgroundColor:"white" , display:"flex" , justifyContent:"space-between" , alignItems:"center" , padding:"10px 30px", height:"50%" , color:"black" , borderRadius:"20px" , marginTop:"20px" }}>
    <div class="col-md-4 col-sm-12 image"  style={{width:"40%"}}>
      <img src={API_IMG+poster_path} class="img-fluid rounded-start" alt="..." style={{width:"300px"}}/>
    </div>
    <div class="col-md-8 col-sm-12 text" style={{width:"90%"  , height:"100%" , paddingLeft:"30px" , paddingTop:"20px"}}>
    <div className='cross' onClick={handleClose}><IoIosCloseCircle  style={{fontSize:"35px"}}/></div>
      <div class="card-body text-2" >
        <h5 class="card-title">{title}</h5>
        <h3 class="card-text-h3">Rating: {vote_average}</h3>
        <h4 class="card-text-h4">Release Date:  {release_date}</h4>
        <h5 class="card-text-h5">Overview:  {overview}</h5>
        <div className='btns' style={{display:"flex" , justifyContent:"center" , alignItems:"center" ,float:"inline-end" , marginTop:"80px"}}>
        <button className='btn btn-success' onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
    </div>
   
  </div>
</div>
</div>


</Modal>
                    
</>
  )
}


export default Card
