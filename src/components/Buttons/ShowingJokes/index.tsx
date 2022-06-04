import React, {useState} from 'react';
import {Button} from "../styles";
import {useAppDispatch} from "../../../hooks/redux";
import {fetchJoke} from "../../../store/reducers/ActionCreators";

export const ShowJokesButton = () => {
    const [timerId, setTimerId] = useState<NodeJS.Timer | null>(null)
    const dispatch = useAppDispatch()

    const handleClick = () => {
        if (!timerId) {
            const id = setInterval(() => dispatch(fetchJoke()), 3000);
            setTimerId(id)
        } else {
            clearInterval(timerId)
            setTimerId(null)
        }
    }

    return <Button onClick={handleClick}>{
        timerId
            ? 'stop showing'
            : 'start showing'
    }</Button>
}