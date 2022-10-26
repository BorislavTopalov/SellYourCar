import { createSlice } from '@reduxjs/toolkit';
import DefaultAds from "../data/defaultAds";

const initialState = {
    filterredAds: DefaultAds().defaultAds,
};

const filterredAdsSlice = createSlice({
    name: 'filterredAds',
    initialState,
    reducers: {
        filter(state, { payload }) {
            state.filterredAds = DefaultAds().defaultAds.filter(ad =>
                (payload.make === "Всички" ? true : ad.make === payload.make) &&
                (payload.model === "Всички" ? true : ad.model === payload.model) &&
                (payload.yearFrom ? ad.date >= payload.yearFrom : true) &&
                (payload.yearTo ? ad.date <= payload.yearTo : true) &&
                (payload.priceFrom ? ad.price >= payload.priceFrom : true) &&
                (payload.priceTo ? ad.price <= payload.priceTo : true) &&
                (ad.currency === payload.currency) &&
                (payload.euroStandart === "Всички" ? true : ad.euro === payload.euroStandart) &&
                (payload.color === "Всички цветове" ? true : ad.color === payload.color) &&
                // (payload.powerFrom ? ad.power >= payload.powerFrom : true) &&
                // (payload.powerTo ? ad.power <= payload.powerTo : true) 
                (payload.maxMillage === "Без значение" ? true : payload.maxMillage >= ad.millage) &&
                (payload.region === "Всички" ? true : ad.region === payload.region) &&
                (payload.town === "Всички" ? true : ad.town === payload.town) &&
                (payload.engine === "Всички" ? true : ad.engine === payload.engine)
            )
        }
    }
})

export const { filter } = filterredAdsSlice.actions
export default filterredAdsSlice.reducer