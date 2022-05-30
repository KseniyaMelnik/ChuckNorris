import React from 'react';
import {Button} from "./styles";
import {useAppDispatch} from "../../hooks/redux";
import {fetchJoke} from "../../store/reducers/ActionCreators";

export const JokeButton = () => {
    const dispatch = useAppDispatch()
    const handleClick = ()=>{
        dispatch(fetchJoke())
    }
    return <Button onClick={handleClick}>Get new joke</Button>
}