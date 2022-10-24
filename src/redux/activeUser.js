import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('mobile-active-user'))
    || {
    email: "",
    password: "",
    favourites: [],
    active: [],
    inactive: []
};

export const activeUserSlice = createSlice({
    name: 'activeUser',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.email = payload.email;
            state.password = payload.password;
            // state.favourites = payload.favourites;
            state.active = payload.active;
            state.inactive = payload.inactive;
        },
        logout: (state) => {
            state.email = "";
            state.password = "";
            state.favourites = [];
        },
        addToFavourites: (state, { payload }) => {
            state.favourites.push(payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, addToFavourites } = activeUserSlice.actions

export default activeUserSlice.reducer


