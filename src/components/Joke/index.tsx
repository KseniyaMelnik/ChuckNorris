import React from 'react';
import {jokeSlice} from "../../store/reducers/JokeSlice";
import {IJoke} from "../../models/IJoke";
import {useAppDispatch} from "../../hooks/redux";
import {JokeContainer, JokeRemoveBtn} from "./styles"


type JokeProps = {
    joke: IJoke
}

export const Joke = ({joke}: JokeProps) => {
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(jokeSlice.actions.removeFavoriteJoke(joke))
    }

   
    return <JokeContainer>
        <div> {joke.value} </div> 
        <JokeRemoveBtn onClick={handleClick}> X </JokeRemoveBtn>
    </JokeContainer>
}