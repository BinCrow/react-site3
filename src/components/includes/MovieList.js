import React from 'react'
import MovieItem from './MovieItem'

function MovieList(props) {
  // console.log(props)
  return (
    <div className="movie__list">
      <ul>
        {props.movies.map((movies, index) => (
          <MovieItem key={index} movies={movies} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList