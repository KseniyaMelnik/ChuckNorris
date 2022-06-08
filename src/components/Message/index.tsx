import React from 'react';
import {DisplayContainer} from "./styles";
import {useAppSelector} from "../../hooks/redux";
import {FistButton} from "../FistButton";

export const Message = () => {
    const {jokes} = useAppSelector(state=> state.jokeReducer)
    return (
        <DisplayContainer>
            <div>
                {jokes[0].value}
            </div>
            <FistButton />
        </DisplayContainer>
    )

}