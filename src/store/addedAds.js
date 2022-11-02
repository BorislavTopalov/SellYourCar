import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('mobile-added-ads')) || [];


export const addedAdsSlice = createSlice({
    name: 'addedAds',
    initialState,
    reducers: {
        addNewAd(state, action) {
            console.log(action);
            state.unshift(action.payload)
        },
        deactivate(state, { payload }) {
            state[state.findIndex(e => e.id == payload.id)].isActive = false;
        },
        activate(state, { payload }) {
            state[state.findIndex(e => e.id == payload.id)].isActive = true;
        }
    },
})

export const { addNewAd, deactivate, activate } = addedAdsSlice.actions

export default addedAdsSlice.reducer