import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('mobile-active-user'))
    || {};

export const activeUserSlice = createSlice({
    name: 'activeUser',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.email = payload.email;
            state.password = payload.password;
            state.favourites = payload.favourites;
            state.active = payload.active;
            state.inactive = payload.inactive;
        },
        logout: (state) => {
            state.email = "";
            state.password = "";
            state.favourites = [];
            state.active = [];
            state.inactive = [];
        },
        addToFavourites: (state, action) => {
            if (JSON.parse(localStorage.getItem('mobile-active-user')).email) {
                state.favourites.push(action.payload);
            }
        },
        removeFromFavourites: (state, action) => {
            if (JSON.parse(localStorage.getItem('mobile-active-user')).email) {
                state.favourites.splice(state.favourites.findIndex((item) => item.id === action.payload.id), 1);
            }
        },
        addNewActiveAd: (state, action) => {
            if (JSON.parse(localStorage.getItem('mobile-active-user')).email) {
                state.active.unshift(action.payload);
            }
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
export const { login, logout, addToFavourites, removeFromFavourites, addNewActiveAd, changePassword, changeEmailA, deleteAcc } = activeUserSlice.actions

export default activeUserSlice.reducer


