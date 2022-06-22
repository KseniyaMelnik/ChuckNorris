import {IJoke} from "../../models/IJoke";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface JokesState {
    jokes: IJoke[];
    favoriteJokes: IJoke[];
    isLoading: boolean;
    error: string;
}

const initialState: JokesState = {
    jokes: [],
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
            state.favoriteJokes.push(action.payload)
            if (state.favoriteJokes.length > 10) {
                state.favoriteJokes.splice(0, 1)
            }

        },
        removeFavoriteJoke(state, action: PayloadAction<IJoke>) {
            const index = state.favoriteJokes.findIndex(j => j.id === action.payload.id);
            if (index > -1){
                state.favoriteJokes.splice(index, 1);
            }
        },
        favoriteJokesFetching(state, action: PayloadAction<IJoke[]> ){
            state.favoriteJokes = action.payload
        },
        resetFavoriteJokes (state) {
            state.favoriteJokes = []
        }
    }
})

export default jokeSlice.reducer;