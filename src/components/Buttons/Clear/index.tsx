import React from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import {Button} from "../styles";
import {jokeSlice} from "../../../store/reducers/JokeSlice";


export const Clear = () => {

    const dispatch = useAppDispatch()

    return <Button onClick={()=> {dispatch(jokeSlice.actions.resetFavoriteJokes())}}>Clear</Button>
}