import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('mobile-added-ads')) || [];


export const addedAdsSlice = createSlice({
    name: 'addedAds',
    initialState,
    reducers: {
        addNewAd(state, action) {
            state.unshift(action.payload)
        },
        deactivate(state, { payload }) {
            state[state.findIndex(e => e.id === payload.id)].isActive = false;
        },
        activate(state, { payload }) {
            state[state.findIndex(e => e.id == payload.id)].isActive = true;
        },
        deleteAdFromAdded(state, { payload }) {
            state.splice(state.findIndex(e => e.id == payload.id), 1);
        }
    },
})

export const { addNewAd, deactivate, activate, deleteAdFromAdded } = addedAdsSlice.actions

export default addedAdsSlice.reducer