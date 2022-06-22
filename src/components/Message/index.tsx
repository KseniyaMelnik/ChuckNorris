import React, { useEffect } from 'react';
import {DisplayContainer} from "./styles";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {FistButton} from "../FistButton";
import {fetchJoke} from "../../store/reducers/ActionCreators";
import { useDispatch } from 'react-redux';


export const Message = () => {
    const {jokes} = useAppSelector(state=> state.jokeReducer)
    const dispatch = useAppDispatch()

    useEffect (()=> {
        dispatch(fetchJoke())
    }, [])

    return (
        <DisplayContainer>
            <div>
                {jokes[0] && jokes[0].value}
            </div>
            <FistButton />
        </DisplayContainer>
    )

}