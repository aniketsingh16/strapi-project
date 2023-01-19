/* eslint-disable react/no-unknown-property */
import React from 'react';
import Footer from './Footer';
import Foot from '../Footer/Foot';
import Header from "../common/header/Header";


const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <header>
        <Header />
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Foot />
      </footer>
    </div>
  )
}

export default Layout