import {AppDispatch} from "../store";
import axios from "axios";
import {IJoke} from "../../models/IJoke";
import {jokeSlice} from "./JokeSlice";


export const fetchJoke = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(jokeSlice.actions.jokeFetching())
        const response = await axios.get<IJoke>('https://api.chucknorris.io/jokes/random')
        dispatch(jokeSlice.actions.jokeFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(jokeSlice.actions.jokeFetchingError(e.message))
    }
}
