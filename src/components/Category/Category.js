import React from 'react';
import './Category.css';

export function Category(props) {
  return (
    <div className='category'>{props.categoryName}</div>
  );
}