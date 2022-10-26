import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // mainCategory: "",
    make: "Всички",
    model: "Всички",
    yearFrom: "",
    yearTo: "",
    priceFrom: "",
    priceTo: "",
    currency: "лв.",
    euroStandart: "Всички",
    color: "Всички цветове",
    maxMillage: "Без значение",
    region: "Всички",
    town: "Всички",
    engine: "Всички",
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilter(state, { payload }) {
            state[`${payload.name}`] = payload.value;
            // console.log(state[`${payload.name}`]);
        },
        reset(state) {
            state.make = "Всички";
            state.model = "Всички";
            state.yearFrom = "";
            state.yearTo = "";
            state.priceFrom = "";
            state.priceTo = "";
            state.currency = "лв.";
            state.euroStandart = "Всички";
            state.color = "Всички цветове";
            state.maxMillage = "Без значение";
            state.region = "Всички";
            state.town = "Всички";
            state.engine = "Всички";
        }
    },
})

export const { addFilter, reset } = filtersSlice.actions
export default filtersSlice.reducer