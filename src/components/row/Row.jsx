import React,{useEffect,useState} from 'react'
import { getMovies } from '../../Api.jsx'
import './Row.css'
// rcfe
const imageHost="https://image.tmdb.org/t/p/original/";
export function Row({title,path,isLarge}) {
    const [movies,setMovies]= React.useState([]);
    const fetchMovies = async(_path)=>{
        try{
            const data = await getMovies(_path);
            console.log(data)
            setMovies(data?.results)
        }catch(error){
            console.log("deu erro no fatch movies : ",error);
        }
    }
    // useEffect(() => {
    //     //faz alguma coisa
    //   return () => {
    //       //faz alguma coisa quando for destruido
        
    //     };
    // }, [])
    useEffect(()=>{
        fetchMovies(path);
    },[path])
    return (  
        <div className='row-container'>
            <h2 className='header'> {title}</h2>
            <div className='row-cards'>
                {movies?.map(movie=>{
                    return(
                        <img className={`movie-image ${isLarge && "movie-image-large"}`}
                         key={movie.id} 
                         src={`${imageHost}${movie.poster_path}`}
                          alt={movie.name}
                        />
                    )
                })}
            </div>
        </div>
  )
}	