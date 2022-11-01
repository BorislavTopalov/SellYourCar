import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('mobile-users')) || [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    register: (state, { payload }) => {
      state.push(payload)
    },
    changePass: (state, { payload }) => {
      state[payload.index].password = payload.password;
    },
    changeEmailU: (state, { payload }) => {
      state[payload.index].email = payload.email;
    },
    deleteUser: (state, { payload }) => {
      if (payload.index >= 0) {
        state.splice(payload.index, 1);
      }
    },
    changeFavourites: (state, { payload }) => {
      if(payload.index >=0){
        state[payload.index].favourites = payload.favourites;
      }      
    },
    changeMyAds: (state, { payload }) => {
      if(payload.index >=0){
        state[payload.index].active = payload.active;
        state[payload.index].inactive = payload.inactive;
      }      
    }
  },
})

// Action creators are generated for each case reducer function
export const { register, changePass, changeEmailU, deleteUser, changeFavourites, changeMyAds } = usersSlice.actions

export default usersSlice.reducer