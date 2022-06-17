import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {ModalContainer, ModalContent} from "./styles";
import {Joke} from "./../Joke"
import {jokeSlice} from "../../store/reducers/JokeSlice";



type ModalProps = {
    active: boolean,
    setActive: (active: boolean) => void
}



export const Modal = ({active, setActive}: ModalProps) => {
    const {favoriteJokes} = useAppSelector(state => state.jokeReducer)
    const dispatch = useAppDispatch()


    useEffect(()=>{
        let jokes = localStorage.getItem("favoriteJokes")
        if (jokes) {
            let newJokes = JSON.parse(jokes)
            dispatch(jokeSlice.actions.favoriteJokesFetching(newJokes))
        }
    },[])
    useEffect(()=>{
        localStorage.setItem("favoriteJokes", JSON.stringify(favoriteJokes));
    },[favoriteJokes])
    
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