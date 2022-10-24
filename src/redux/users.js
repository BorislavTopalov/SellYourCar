import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('mobile-users')) || [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    register: (state, { payload }) => {
        state.push(payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { register } = usersSlice.actions

export default usersSlice.reducer