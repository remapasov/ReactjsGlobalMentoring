import React from 'react';
import PropTypes from 'prop-types';
import './Category.css';

export function Category(props) {
  return (
    <div className='category'>{props.categoryName}</div>
  );
}

Category.propTypes = {
  categoryName: PropTypes.string
};