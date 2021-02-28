import React from 'react';
import { Category } from '../components/Category/Category';
import { MovieContainer } from './MovieContainer';
import './styles/Body.css';
import './styles/MovieContainer.css';

export function Body() {
  const categories = ['All', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

  return (
    <div className='body-container'>
      <div className='body-menu'>
        <div className='categories'>
          {
            categories.map((el, key) => {
              return (
                <Category
                  key={key}
                  categoryName={el}
                />
              )
            })
          }
        </div>
        <div className='sorting'>
          <div className='sort-title'>SORT BY</div>
          <div className='sort-category'>RELEASE DATE</div>
        </div>
      </div>
      <div className='search-result'><b>39</b> movies found</div>
      <MovieContainer />
    </div>
  );
}
