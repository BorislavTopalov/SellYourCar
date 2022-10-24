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
            // state.active = payload.active;
            // state.inactive = payload.inactive;
        },
        logout: (state) => {
            state.email = "";
            state.password = "";
            state.favourites = [];
            state.active = [];
            state.inactive = [];
        },
        addToFavourites: (state, { payload }) => {
            state.favourites.push(payload)
        },
        changePassword: (state, { payload }) => {
            state.password = payload.password;
        },
        changeEmailA: (state, { payload }) => {
            state.email = payload.email;
        },
        deleteAcc: (state) => {
            state.email = "";
            state.password = "";
            state.favourites = [];
            state.active = [];
            state.inactive = [];
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, addToFavourites, changePassword, changeEmailA, deleteAcc } = activeUserSlice.actions

export default activeUserSlice.reducer


