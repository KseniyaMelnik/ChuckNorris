import React from 'react';
import {DisplayContainer} from "./styles";
import {useAppSelector} from "../../hooks/redux";

export const Message = () => {
    const {jokes} = useAppSelector(state=> state.jokeReducer)
    return (
        <DisplayContainer>
            {jokes[0].value}
        </DisplayContainer>
    )

}