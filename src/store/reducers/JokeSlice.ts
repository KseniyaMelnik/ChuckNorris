import {IJoke} from "../../models/IJoke";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface JokesState {
    jokes: IJoke[];
    isLoading: boolean;
    error: string;
}

const initialState: JokesState = {
    jokes: [
        {
            "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            "id": "ZqTlF-iQQ0SETmUOEfaYtw",
            "url": "https://api.chucknorris.io/jokes/ZqTlF-iQQ0SETmUOEfaYtw",
            "value": "the last person to survive a roundhouse kick by ChuckImage Norris was michael jackson. then he turned white"
        }
    ],
    isLoading: false,
    error: ''
}

export const jokeSlice = createSlice({
    name: 'joke',
    initialState,
    reducers: {
        jokeFetching(state) {
            state.isLoading = true;
        },
        jokeFetchingSuccess(state, action: PayloadAction<IJoke>) {
            state.isLoading = false;
            state.error = '';
            state.jokes.unshift(action.payload)
        },
        jokeFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default jokeSlice.reducer;