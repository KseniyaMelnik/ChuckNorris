import React, {useState} from 'react';
import './App.css';
import {Message} from "./components/Message";
import {JokeButton} from "./components/Buttons/JokeButton";
import {AppContainer, ContentContainer, Controls} from "./styles";
import {ShowJokesButton} from "./components/Buttons/ShowingJokes";
import {JokeListButton} from "./components/Buttons/JokeListButton";
import {Modal} from "./components/Modal";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Poster } from './components/Poster';

function App() {
    const matches = useMediaQuery('(max-width:768px)');
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
          {!matches && <Poster />}
          <Modal setActive={setModalActive} active={modalActive}/>
      </AppContainer>
  );
}

export default App;
