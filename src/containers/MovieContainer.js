import React from 'react';
import { MovieTile } from '../components/MovieTile/MovieTile'
import './styles/MovieContainer.css';

export function MovieContainer() {
  const movies = [
    {
      name: 'Pulp Fiction',
      description: 'Action & Adventure',
      year: '2004',
      posterUrl: 'PulpFiction.jpg'
    },
    {
      name: 'The Hateful Eight',
      description: 'Action, Detective',
      year: '2016',
      posterUrl: 'TheHatefulEight.jpg'
    },
    {
      name: 'Inglourious Basterds',
      description: 'Action, Drama',
      year: '2009',
      posterUrl: 'InglouriousBasterds.jpg'
    },
    {
      name: 'Pulp Fiction',
      description: 'Action & Adventure',
      year: '2004',
      posterUrl: 'PulpFiction.jpg'
    },
    {
      name: 'The Hateful Eight',
      description: 'Action, Detective',
      year: '2016',
      posterUrl: 'TheHatefulEight.jpg'
    },
    {
      name: 'Inglourious Basterds',
      description: 'Action, Drama',
      year: '2009',
      posterUrl: 'InglouriousBasterds.jpg'
    }
  ];

  return (
    <div className='movie-container'>
      {
        movies.map((el, key) => {
          return (
            <MovieTile
              key={key}
              movieData={el}
            />
          )
        })
      }
    </div>
  );
}
