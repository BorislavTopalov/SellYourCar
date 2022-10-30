import { createSlice } from '@reduxjs/toolkit';
import DefaultAds from '../data/defaultAds';

const initialState = {
    filterredAds: JSON.parse(localStorage.getItem('mobile-added-ads')) ?
        [...JSON.parse(localStorage.getItem('mobile-added-ads')), ...DefaultAds().defaultAds] :
        DefaultAds().defaultAds
};

const filterredAdsSlice = createSlice({
    name: 'filterredAds',
    initialState,
    reducers: {
        filter(state, { payload }) {
            state.filterredAds = (JSON.parse(localStorage.getItem('mobile-added-ads')) ?
                [...JSON.parse(localStorage.getItem('mobile-added-ads')), ...DefaultAds().defaultAds] :
                DefaultAds().defaultAds).filter(ad =>
                    (payload.make === "Всички" ? true : ad.make === payload.make) &&
                    (payload.model === "Всички" ? true : ad.model === payload.model) &&
                    (payload.yearFrom ? ad.date >= payload.yearFrom : true) &&
                    (payload.yearTo ? ad.date <= payload.yearTo : true) &&
                    (payload.priceFrom ? ad.price >= payload.priceFrom : true) &&
                    (payload.priceTo ? ad.price <= payload.priceTo : true) &&
                    (payload.currency === "Всяка" ? true : ad.currency === payload.currency) &&
                    (payload.euroStandart === "Всички" ? true : ad.euro === payload.euroStandart) &&
                    (payload.color === "Всички цветове" ? true : ad.color === payload.color) &&
                    (payload.powerFrom ? ad.power >= payload.powerFrom : true) &&
                    (payload.powerTo ? ad.power <= payload.powerTo : true) &&
                    (payload.maxMillage === "Без значение" ? true : payload.maxMillage >= ad.millage) &&
                    (payload.region === "Всички" ? true : ad.region === payload.region) &&
                    (payload.town === "Всички" ? true : ad.town === payload.town) &&
                    (payload.engine === "Всички" ? true : ad.engine === payload.engine) &&
                    (payload.transmission === "Всички" ? true : ad.transmission === payload.transmission) &&
                    (ad.mainCategory === payload.mainCategory) &&
                    (payload.extras.length > 0 ? payload.extras.every(el => ad.extras.some(e => e.id == el)) : true)
                ).sort((a, b) => {
                    if (a.make === b.make) {
                        return (a.model < b.model) ? -1 : (a.model > b.model) ? 1 : 0;
                    } else {
                        return (a.make < b.make) ? -1 : 1;
                    }
                });
            if (payload.sort === "Цена") {
                state.filterredAds.sort((a, b) => {
                    if (a.price > b.price) {
                        return 1;
                    }
                    if (a.price < b.price) {
                        return -1;
                    }
                    return 0;
                })
            }
            if (payload.sort === "Година") {
                state.filterredAds.sort((a, b) => {
                    if (a.date < b.date) {
                        return 1;
                    }
                    if (a.date > b.date) {
                        return -1;
                    }
                    return 0;
                })
            }
            if (payload.sort === "Пробег") {
                state.filterredAds.sort((a, b) => {
                    if (a.millage > b.millage) {
                        return 1;
                    }
                    if (a.millage < b.millage) {
                        return -1;
                    }
                    return 0;
                })
            }
        }
    }
})

export const { filter } = filterredAdsSlice.actions
export default filterredAdsSlice.reducer