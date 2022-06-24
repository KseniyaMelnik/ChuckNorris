import React, {useState, useEffect} from 'react';
import { ChuckImage } from '../ChuckImage';
import {PosterContainer} from './styles';
import {Layer} from "react-konva";
import { DraggableText } from '../DraggableText';
import { useAppSelector } from '../../hooks/redux';


export const Poster = () => {
  const selectedJokes = useAppSelector(state=> state.jokeReducer.favoriteJokes)
  
  return (
    <PosterContainer width={600} height={window.innerHeight}>
      <Layer>
        <ChuckImage />
        {selectedJokes.map(({id, value})=> <DraggableText key={id} text={value}/>)}
      </Layer>
    </PosterContainer>
  );

}