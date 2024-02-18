import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Card from './Card';
import Movie from '../assets/movie logo.png'
let API_key="&api_key=27c7e25cdc2b4fa4da44500e27e762ca";

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=077d5dbe685eb713e29fed7aeb3d6569";



const Main = () => {
    const [movies , setMovies] = useState([])
    const [url , setUrl] = useState(API_URL)
//    const [search , setSearch] = useState()
const [query , setQuery] = useState("")


    useEffect(() => {
       fetch(API_URL)
       .then(res=>res.json())
       .then(data=>{
        console.log(data.results);
        setMovies(data.results)
       })
    } , [])

    const getData = (movieType) =>{
      

    
        
        if(movieType == "trending"){
            API_URL=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key
        }
       setUrl(API_URL)
    }

   

    const searchMovie = async(e) => {
        e.preventDefault();
        console.log("Searching");
        try{
          const search_url=`https://api.themoviedb.org/3/search/movie?api_key=077d5dbe685eb713e29fed7aeb3d6569&query=${query}`;
          const res = await fetch(search_url)
          const data = await res.json()
          console.log(data);
          setMovies(data.results)
        }
        catch(e){
        console.log(e);
        }
      }
      const changeHandler =(e) => {
        setQuery(e.target.value)
      }
  return (
   <>
   
     <div className='header'>
        <nav >
            

            <ul>
            <li><a href="/home">
                            <img src={Movie} style={{width:"150px"}}/>
                            </a></li>
                
                
            
            </ul>
        </nav>
        <form onSubmit={searchMovie}>
            <div className='search-btn'>
             <input type="text" placeholder='Enter Movie Name' className='inputText' name='query' value={query} onChange={changeHandler}/>
               <button className='icon' type='submit'><FaSearch/></button>
            </div>
        </form>
     </div>
  
     <div className='bb'>  

    {movies.length > 0 ? ( <div className='container'>
      
      {movies.map((movieReq) => <Card key={movieReq.id} {...movieReq}/>)}
    
    </div>) :(
      <h2 className='sorry' style={{height:"100vh" , display:"flex" , alignItems:"center" , fontSize:"35px" , color:"black"}}>Sorry!!!     No Movie Found</h2>
    )}
  
   </div>
   </>
  )
}

export default Main
