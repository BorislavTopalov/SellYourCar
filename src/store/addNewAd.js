import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    newAds: {
        mainCategory: "Автомобили и Джипове",
        make: "Всички",
        model: "Всички",
        year: "",
        price: "",
        currency: "Всяка",
        euroStandart: "Всички",
        color: "Всички цветове",
        maxMillage: "Без значение",
        region: "Всички",
        town: "Всички",
        engine: "Всички",
        transmission: "Всички",
        power: 0,
        extras: [],
    },
}

const newAdSlice = createSlice({

    name: "newAds",
    initialState,
    reducers: {
            addParameter(state, { payload }) {
                state[`${payload.name}`] = payload.value;
            },

        }
})

export const { addParameter } = newAdSlice.actions;
export default newAdSlice.reducer;