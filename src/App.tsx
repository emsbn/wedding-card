import React from 'react';
import './App.css';
import HeaderContainer from './containers/Header';
import BodyContainer from './containers/Body';
import FooterContainer from './containers/Footer';
import Story from './components/Story';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <BodyContainer>
        <Story />
      </BodyContainer>
      <FooterContainer />
    </div>
  );
}

export default App;
