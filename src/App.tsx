import React from 'react';
import './App.css';
import HeaderContainer from './layouts/Header';
import BodyContainer from './layouts/Body';
import FooterContainer from './layouts/Footer';
import Story from './components/Story';
import Announcement from './components/Announcement';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <BodyContainer>
        <Story />
        <Announcement />
      </BodyContainer>
      <FooterContainer />
    </div>
  );
}

export default App;
