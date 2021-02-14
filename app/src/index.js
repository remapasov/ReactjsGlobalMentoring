import React from 'react';
import ReactDOM from 'react-dom';
import { FirstComponent, SecondComponent, ThirdComponent, FourthComponent } from './App';

ReactDOM.render(
  <React.StrictMode>
    {FirstComponent}
    <SecondComponent />
    <ThirdComponent />
    <FourthComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
