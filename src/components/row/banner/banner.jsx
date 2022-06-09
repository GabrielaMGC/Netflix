import React, { useEffect } from "react";
import { getMovies } from "../../../Api";

function Banner(){
    const [movie, setMovie] = React.useState({});

    const fetchRandomMovie = async () => {
        try{
            const netflixOriginalsCategory = categories.find(
                (category) => category.name === "netflixOriginals"
            );
            const data = await getMovies(netflixOriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movie.lenght);
            setMovie(movies[randomIndex]);
          } catch (error) {
              console.log("Banner fetchRandomMovie error: ", error);
          }
    };

    useEffect(() => {
        fetchRandomMovie();
    }, []);

    function truncate(str, n){
        return str?.lenght > n ? str.substring(0, n - 1) + "..." : str;
    }

    return(
        <div></div>
    )
}