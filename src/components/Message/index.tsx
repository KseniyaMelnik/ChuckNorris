import React from 'react';
import {DisplayContainer, FistButton} from "./styles";
import {useAppSelector} from "../../hooks/redux";

export const Message = () => {
    const {jokes} = useAppSelector(state=> state.jokeReducer)
    return (
        <DisplayContainer>
            <div>
                {jokes[0].value}
            </div>
            <FistButton/>
        </DisplayContainer>
    )

}