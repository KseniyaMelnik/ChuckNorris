import React from 'react';
import './App.css';
import {Message} from "./components/Message";
import {JokeButton} from "./components/Buttons/JokeButton";
import {ChuckImage} from "./components/ChuckImage";
import {AppContainer, ContentContainer, Controls} from "./styles";
import {ShowJokesButton} from "./components/Buttons/ShowingJokes";
import {JokeListButton} from "./components/Buttons/JokeListButton";

function App() {
  return (
      <AppContainer>
          <ContentContainer>
              <Message />
              <Controls>
                  <JokeButton />
                  <ShowJokesButton />
                  <JokeListButton />
              </Controls>
          </ContentContainer>
          <ChuckImage />
      </AppContainer>
  );
}

export default App;
