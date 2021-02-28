import React from 'react';
import './MovieTile.css';

export function MovieTile(props) {
  return (
    <div className='movie-tile'>
      <div className='poster'>
        <img
          src={`./src/images/${props.movieData.posterUrl}`}
          className='movie-poster'
        />
      </div>
      <div className='movie-info'>
        <div className='movie-description'>
          <div className='movie-name'>{props.movieData.name}</div>
          <div className='movie-year'>{props.movieData.year}</div>
        </div>
        <div className='movie-genre'>{props.movieData.description}</div>
      </div>
    </div>
  );
}