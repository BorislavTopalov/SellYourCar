import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('mobile-added-ads')) || [];


export const addedAdsSlice = createSlice({
    name: 'addedAds',
    initialState,
    reducers: {
        addNewAd(state, { payload }) {
            state.unshift(payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addNewAd } = addedAdsSlice.actions

export default addedAdsSlice.reducer