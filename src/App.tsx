import React from 'react';
import './App.css';
import {Message} from "./components/Message";
import {JokeButton} from "./components/JokeButton";
import {ChuckImage} from "./components/ChuckImage";
import {AppContainer, ContentContainer} from "./styles";

function App() {
  return (
      <AppContainer>
          <ContentContainer>
              <Message />
              <JokeButton />
          </ContentContainer>
          <ChuckImage />
      </AppContainer>
  );
}

export default App;
