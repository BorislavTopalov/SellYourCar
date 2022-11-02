import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('mobile-added-ads')) || [];


export const addedAdsSlice = createSlice({
    name: 'addedAds',
    initialState,
    reducers: {
        addNewAd(state, action) {
            state.unshift(action.payload)
        },
        removeAdFromAdded(state, { payload }){
            state.splice(state.indexOf(payload), 1);
        }
    },
})

export const { addNewAd, removeAdFromAdded } = addedAdsSlice.actions

export default addedAdsSlice.reducer