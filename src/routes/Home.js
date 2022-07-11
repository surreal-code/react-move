import {useEffect, useState} from "react";
import Movie from "../components/Movie"
import React from "react";

function Home () {
  const [loading, setLoading] = useState(true); 
  const [movies, setMovies] = useState([]);
  const getMovies = async () =>{
    const json = await (
      await fetch (
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=620b3839d388facb77027e57e8b6e241&targetDt=20220701`
    )).json();
    //console.log(json);
    setMovies(json.boxOfficeResult.weeklyBoxOfficeList);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div> 
        {loading ? (
        <h1>Loading...</h1>
         ) : (
        <div>  
            {movies.map((movie)=> (
        <Movie 
          key={movie.movieCd}
          id={movie.movieCd}
          movieName={movie.movieNm} 
          openDt={movie.openDt}
          />  
        ))} 
      </div>
      )}
    </div>
    );
}

export default Home;