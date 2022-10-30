import { createSlice } from '@reduxjs/toolkit';
import DefaultAds from "../data/defaultAds";

const initialState =  JSON.parse(localStorage.getItem('mobile-added-ads')) ?
    [...JSON.parse(localStorage.getItem('mobile-added-ads')), ...DefaultAds().defaultAds] :
    DefaultAds().defaultAds


export const totalAdsSlice = createSlice({
    name: 'totalAds',
    initialState,
    reducers: {
        proba(state){

        }
    },
})

// Action creators are generated for each case reducer function
export const { proba} = totalAdsSlice.actions

export default totalAdsSlice.reducer