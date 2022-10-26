import { createSlice } from '@reduxjs/toolkit'
import CategoryOptions from '../data/categoryOptions';
import RegionAndTownOptions from '../data/regionAndTownOptions';

const initialState = {
    selectedMain: CategoryOptions().categorieOptions[0],
    make: CategoryOptions().categorieOptions[0].make,
    model: CategoryOptions().categorieOptions[0].make[0].model,
    town: RegionAndTownOptions().regionAndTownOptions[0].town,
    mainCategory: CategoryOptions().categorieOptions[0].value
};

export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    reducers: {
        handleMainCategory: (state, { payload }) => {
            state.make = CategoryOptions().categorieOptions.find((el) => el.value === payload).make;
            state.mainCategory = payload;
        },
        handleMakeCategory: (state, { payload }) => {
            state.model = state.make.find((el) => el.value === payload).model;
        },
        handleChangeRegion: (state, { payload }) => {
            state.town = RegionAndTownOptions().regionAndTownOptions.find((el) => el.value === payload).town;
        },
        changeSelectedOption: (state, { payload }) => {
            state.selectedMain = payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { handleMainCategory, handleMakeCategory, handleChangeRegion, changeSelectedOption } = optionsSlice.actions

export default optionsSlice.reducer
