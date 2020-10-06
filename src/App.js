import React from 'react';

import virus from './assets/images/virus-solid.svg'

import './App.css'

import Container from './components/Container'
import CardContainer from './components/Cards'

function App() {
  return (
    <Container>
      <header>
        <img src={virus} alt="Virus"/>
        <h1>Corona Tracker</h1>
      </header>
      <CardContainer />
    </Container>
  )
}

export default App;
