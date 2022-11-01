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
        moveToInactive: (state, action) => {
            let index = state.active.findIndex((e) => e.id === action.payload);
            state.inactive.unshift(state.active[index]);
            state.active.splice(index, 1);
         
        },
        moveToActive: (state, action) => {
            let index = state.inactive.findIndex((e) => e.id === action.payload);
            state.active.unshift(state.inactive[index]);
            state.inactive.splice(index, 1);
            
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

export const { login, logout, addToFavourites, removeFromFavourites, addNewActiveAd,
    changePassword, changeEmailA, deleteAcc, moveToActive, moveToInactive } = activeUserSlice.actions

export default activeUserSlice.reducer


