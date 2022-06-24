import React, {useRef} from 'react';
import { ChuckImage } from '../ChuckImage';
import {PosterContainer} from './styles';
import {Layer, Rect} from "react-konva";
import { DraggableText } from '../DraggableText';
import { useAppSelector } from '../../hooks/redux';
import { downloadURI } from '../../utils';

type PosterProps = {
  isExport: boolean, 
  setExport: (value: boolean) => void
}
export const Poster = ({isExport, setExport}: PosterProps) => {
  const selectedJokes = useAppSelector(state=> state.jokeReducer.favoriteJokes)
  const stageRef = useRef<any>(null);

  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    downloadURI(uri, 'poster.jpg');
  };

  if (isExport) {
    setExport(false)
    handleExport()
  }
  
  return (
    <>
    <PosterContainer 
    width={600} 
    height={window.innerHeight} 
    ref={stageRef} 
    >
      <Layer>
        <Rect width={600} height={window.innerHeight} fill="#e6eaec" />
        <ChuckImage />
        {selectedJokes.map(({id, value})=> <DraggableText key={id} text={value}/>)}
      </Layer>
    </PosterContainer>
    </>
  );

}