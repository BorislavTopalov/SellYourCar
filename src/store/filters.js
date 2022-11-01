import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mainCategory: "Автомобили и Джипове",
    make: "Всички",
    model: "Всички",
    yearFrom: "",
    yearTo: "",
    priceFrom: "",
    priceTo: "",
    currency: "Всяка",
    euroStandart: "Всички",
    color: "Всички цветове",
    maxMillage: "Без значение",
    vehicleCategory: "",
    region: "Всички",
    town: "Всички",
    engine: "Всички",
    transmission: "Всички",
    powerFrom: 0,
    powerTo: 0,
    extras: [],
    sort: "Марка/Модел/Цена"
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilter(state, { payload }) {
            state[payload.name] = payload.value;
        },
        addExtra(state, { payload }) {
            if (state.extras.indexOf(payload) !== -1) {
                state.extras.splice(state.extras.indexOf(payload), 1);
            } else {
                state.extras.push(payload)
            }

        },
        reset(state) {
            state.mainCategory = "Автомобили и Джипове";
            state.make = "Всички";
            state.model = "Всички";
            state.yearFrom = "";
            state.yearTo = "";
            state.priceFrom = "";
            state.priceTo = "";
            state.currency = "Всяка";
            state.euroStandart = "Всички";
            state.color = "Всички цветове";
            state.maxMillage = "Без значение";
            state.vehicleCategory = "";
            state.region = "Всички";
            state.town = "Всички";
            state.engine = "Всички";
            state.transmission = "Всички"
            state.powerFrom = 0;
            state.powerTo = 0;
            state.sort = "Марка/Модел/Цена";
            state.extras = [];
        }
    },
})

export const { addFilter, reset, addExtra } = filtersSlice.actions
export default filtersSlice.reducer