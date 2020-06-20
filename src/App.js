import React from 'react';

import Toggle from './components/Toggle';
import Inc from './components/Inc';
import Mount from './components/Mount';
import Hover from './components/Hover';
import Nav from './components/Nav';
import Cookie from './components/Cookie';
import Script from './components/Script';
import LocalStorage from './components/LocalStorage';
import Theme from './components/Theme';
import { PageWrapper } from './state';

import { Card, CardGrid, Container, Header } from './Elements';
import Menu from './Menu';
import blue from './blue.png';
import purp from './purp.png';
import green from './green.png';

import './App.css';

function App() {
  return (
    <PageWrapper>
      <div>
        <Header>
          <Menu />
          <h1>Header</h1>
        </Header>
        <Nav />
        <Container>
          <h2>Super Cool</h2>
          <Theme />
          <Cookie />
          <LocalStorage />
          <Toggle />
          <Inc />
          <Mount />
          <Script />
          <Hover />
          <CardGrid>
            <Card style={{ background: 'var(--purp)' }}>
              <h3>Some card</h3>
              <img src={purp} alt="purp img" />
            </Card>
            <Card style={{ background: 'var(--blue)' }}>
              <h3>Some card</h3>
              <img src={blue} alt="blue img" />
            </Card>
            <Card style={{ background: 'var(--green)' }}>
              <h3>Some card</h3>
              <img src={green} alt="green img" />
            </Card>
          </CardGrid>
        </Container>
      </div>
    </PageWrapper>
  );
}

export default App;
