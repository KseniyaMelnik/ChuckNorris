import React, {useState} from 'react';
import './App.css';
import {Message} from "./components/Message";
import {JokeButton} from "./components/Buttons/JokeButton";
import {AppContainer, ContentContainer, Controls} from "./styles";
import {ShowJokesButton} from "./components/Buttons/ShowingJokes";
import {JokeListButton} from "./components/Buttons/JokeListButton";
import {Save} from "./components/Buttons/Save";
import {Modal} from "./components/Modal";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Poster } from './components/Poster';

const App = () => {
    const matches = useMediaQuery('(max-width:768px)');
    const [modalActive, setModalActive] = useState(false);
    const [isExport, setExport] = useState(false)

  return (
      <AppContainer>
          <ContentContainer>
              <Message />
              <Controls>
                  <JokeButton />
                  <ShowJokesButton />
                  <JokeListButton openModal={setModalActive} />
                  <Save setExport={setExport}/>
              </Controls>
          </ContentContainer>
          {!matches && <Poster isExport={isExport} setExport={setExport}/>}
          <Modal setActive={setModalActive} active={modalActive}/>
      </AppContainer>
  );
}

export default App;
