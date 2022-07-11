import React, { useEffect } from "react";
import {useParams} from "react-router-dom";

function Detail () {
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=620b3839d388facb77027e57e8b6e241&movieCd=${id}`)
            ).json();
        console.log(json);
    };
    useEffect(()=> {
        getMovie();
    }, [])
    return <h1>Detail</h1>;
}

export default Detail;