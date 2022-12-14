import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    mainCategory: "Автомобили и Джипове",
    make: "Всички",
    model: "Всички",
    date: "",
    price: "",
    currency: "лв.",
    euro: "Всички",
    color: "Всички цветове",
    millage: "Без значение",
    region: "Всички",
    town: "Всички",
    engine: "Всички",
    transmission: "Всички",
    power: 0,
    extras: [],
    moreInfo: "",
    autoData: "https://autodata24.com",
    contacts: "",
    image: [],
    id: null
}

const newAdsSlice = createSlice({

    name: "newAds",
    initialState,
    reducers: {
        addParameter(state, { payload }) {
            state[payload.name] = payload.value;
        },
        addExtraParameter(state, { payload }) {
            if (state.extras.some(e => e.id === payload.id)) {
                state.extras.splice(state.extras.indexOf(payload), 1);
            } else {
                state.extras.push(payload)
            }
        },
        addImages(state, { payload }) {
            payload.forEach(img => {
                state.image.push(img);
            })

        },
        resetParams(state) {
            state.mainCategory = "Автомобили и Джипове";
            state.make = "Всички";
            state.model = "Всички";
            state.date = "";
            state.price = "";
            state.currency = "лв.";
            state.euro = "Всички";
            state.color = "Всички цветове";
            state.millage = "Без значение";
            state.region = "Всички";
            state.town = "Всички";
            state.engine = "Всички";
            state.transmission = "Всички"
            state.power = 0;
            state.extras = [];
            state.moreInfo = "";
            state.contacts = "";
            state.image = [];
            state.id = null;
        }
    }
})

export const { addParameter, addExtraParameter, addImages, resetParams } = newAdsSlice.actions;
export default newAdsSlice.reducer;