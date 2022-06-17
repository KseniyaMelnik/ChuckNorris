import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {ModalContainer, ModalContent} from "./styles";
import {jokeSlice} from "../../store/reducers/JokeSlice";
import {IJoke} from "../../models/IJoke"



type ModalProps = {
    active: boolean,
    setActive: (active: boolean) => void
}

type JokeProps = {
    joke: IJoke
}

const Joke = ({joke}: JokeProps) => {
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(jokeSlice.actions.removeFavoriteJoke(joke))
    }

   
    return <div>
        <div> {joke.value} </div> 
        <button onClick={handleClick}> X </button>
    </div>
}

export const Modal = ({active, setActive}: ModalProps) => {
    const {favoriteJokes} = useAppSelector(state => state.jokeReducer)
    
    return (
        <ModalContainer style={active ? {display: 'flex'} : {display: 'none'}}
                        onClick={() => setActive(false)}>
            <ModalContent onClick={e => e.stopPropagation()}>
                {favoriteJokes.map(el => {
                    return <Joke joke={el} key={el.id}/>
                })
                }
            </ModalContent>
        </ModalContainer>
    )

}