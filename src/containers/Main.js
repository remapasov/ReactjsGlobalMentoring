import React from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import './styles/Main.css';

export function Main() {
  return (
    <div className='main-container'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
