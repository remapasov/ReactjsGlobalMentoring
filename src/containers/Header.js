import React from 'react';
import './styles/Header.css';

export function Header() {
  return (
    <div className='header-container'>
      <div className='header-panel'>
        <div className='logo'><b>netflix</b>roulette</div>
        <div className='add-button'>+ ADD MOVIE</div>
      </div>
      <div className='header-title'>FIND YOUR MOVIE</div>
      <div className='search-panel'>
        <div className='search-input'>What do you wnat to watch?</div>
        <div className='search-button'>SEARCH</div>
      </div>
    </div>
  );
}
