import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import {ModalContainer, ModalContent} from "./styles";

type ModalProps = {
    active: boolean,
    setActive: (active: boolean) => void
}

export const Modal = ({active, setActive}: ModalProps) => {
    const {favoriteJokes} = useAppSelector(state => state.jokeReducer)
    return (
        <ModalContainer style={active ? {display: 'flex'} : {display: 'none'}}
                        onClick={() => setActive(false)}>
            <ModalContent onClick={e => e.stopPropagation()}>
                {favoriteJokes.map(el => {
                    return <div key={el.id}> {el.value}</div>
                })
                }
            </ModalContent>
        </ModalContainer>
    )

}