import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Register from './Register'
import ReactGA, { pageview } from 'react-ga'; 
import React,{ useEffect } from 'react';
import Registration from './Registration';
function App() {
  useEffect(() =>{
    ReactGA.initialize('UA-252698387-1')
    ReactGA.pageview('window.location.pathname');
  })

  return (
    <>
      {/* <Register />
      {pageview} */}
      <Registration />
    </>
  )
}

export default App
