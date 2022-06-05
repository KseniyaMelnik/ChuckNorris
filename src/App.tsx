import React, {useState} from 'react';
import './App.css';
import {Message} from "./components/Message";
import {JokeButton} from "./components/Buttons/JokeButton";
import {ChuckImage} from "./components/ChuckImage";
import {AppContainer, ContentContainer, Controls} from "./styles";
import {ShowJokesButton} from "./components/Buttons/ShowingJokes";
import {JokeListButton} from "./components/Buttons/JokeListButton";
import {Modal} from "./components/Modal";

function App() {
    const [modalActive, setModalActive] = useState(false)
  return (
      <AppContainer>
          <ContentContainer>
              <Message />
              <Controls>
                  <JokeButton />
                  <ShowJokesButton />
                  <JokeListButton openModal={setModalActive} />
              </Controls>
          </ContentContainer>
          <ChuckImage />
          <Modal setActive={setModalActive} active={modalActive}/>
      </AppContainer>
  );
}

export default App;
