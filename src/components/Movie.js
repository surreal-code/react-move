import PropTypes from "prop-types";
import React from "react";
import {Link} from "react-router-dom"

function Movie({id, movieName, openDt}) {
    return (
        <div>
          <h2>
            <Link to={`/movie/${id}`}>{movieName}</Link></h2>
          <p>{openDt}</p>
        </div>
    );
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    movieName : PropTypes.string.isRequired,
    openDt : PropTypes.string.isRequired
}

export default Movie;