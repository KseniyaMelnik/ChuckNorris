import React from 'react';
import './App.css';
import {Message} from "./components/Message";
import {AppContainer} from "./styles";
import {JokeButton} from "./components/JokeButton";

function App() {
  return (
      <AppContainer>
          <Message />
          <JokeButton />
      </AppContainer>
  );
}

export default App;
