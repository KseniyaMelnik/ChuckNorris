import {IJoke} from "../../models/IJoke";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface JokesState {
    jokes: IJoke[];
    favoriteJokes: IJoke[];
    isLoading: boolean;
    error: string;
}

const initialState: JokesState = {
    jokes: [
        {
            icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            id: "ZqTlF-iQQ0SETmUOEfaYtw",
            url: "https://api.chucknorris.io/jokes/ZqTlF-iQQ0SETmUOEfaYtw",
            value: "the last person to survive a roundhouse kick by ChuckImage Norris was michael jackson. then he turned white"
        }
    ],
    favoriteJokes: [],
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
        addFavoriteJoke(state, action: PayloadAction<IJoke>) {
            state.favoriteJokes.unshift(action.payload)
        },
        removeFavoriteJoke(state, action: PayloadAction<IJoke>) {
            const index = state.favoriteJokes.findIndex(j => j.id === action.payload.id);
            if (index > -1){
                state.favoriteJokes.splice(index, 1);
            }
        },
        resetFavoriteJokes (state) {
            state.favoriteJokes = []
        }
    }
})

export default jokeSlice.reducer;