import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // newAds: {
    mainCategory: "Автомобили и Джипове",
    make: "Всички",
    model: "Всички",
    date: "",
    price: "",
    currency: "лв.",
    euroStandart: "Всички",
    color: "Всички цветове",
    millage: "Без значение",
    region: "Всички",
    town: "Всички",
    engine: "Всички",
    transmission: "Всички",
    power: 0,
    extras: [],
    image: [],
    id: null
    // },
}

const newAdsSlice = createSlice({

    name: "newAds",
    initialState,
    reducers: {
        addParameter(state, { payload }) {
            state[`${payload.name}`] = payload.value;
        },
        addExtraParameter(state, { payload }) {
            if (state.extras.some(e => e.id === payload.id)) {
                state.extras.splice(state.extras.indexOf(payload), 1);
            } else {
                state.extras.push(payload)
            }
        },
        addImages(state, { payload }) {
            if (state.image.length > 5) {
                state.image.splice(4, 1, payload)
            } else {
                payload.forEach(img => {
                    state.image.push(img.url)
                })
                console.log(payload);
            }
        },
        resetParams(state) {
            state.mainCategory = "Автомобили и Джипове";
            state.make = "Всички";
            state.model = "Всички";
            state.date = "";
            state.price = "";
            state.currency = "лв.";
            state.euroStandart = "Всички";
            state.color = "Всички цветове";
            state.millage = "Без значение";
            state.region = "Всички";
            state.town = "Всички";
            state.engine = "Всички";
            state.transmission = "Всички"
            state.power = 0;
            state.extras = [];
            state.image = [];
            state.id = null;
        }
    }
})

export const { addParameter, addExtraParameter, addImages, resetParams } = newAdsSlice.actions;
export default newAdsSlice.reducer;