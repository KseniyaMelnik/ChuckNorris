import React, {useState} from 'react';
import { FistContainer } from './styles';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {jokeSlice} from "../../store/reducers/JokeSlice";

export const FistButton = () => {
    const dispatch = useAppDispatch()
    const joke = useAppSelector(state=> state.jokeReducer.jokes[0])
    const [active, setActive] = useState(false)
    const handleClick = () => {

        setActive((active) => !active)
        active? dispatch(jokeSlice.actions.addFavoriteJoke(joke))
            : dispatch(jokeSlice.actions.removeFavoriteJoke(joke))
    }
    return <FistContainer onClick={handleClick} style={active? {fill: 'brown'}: {fill: 'black'}}/>
}