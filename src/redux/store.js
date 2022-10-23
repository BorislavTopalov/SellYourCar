import { configureStore } from '@reduxjs/toolkit';
import activeUserReducer from './activeUser';
import usersReducer from "./users";
import optionsReducer from "./options";

export const store = configureStore({
  reducer: {
    activeUser: activeUserReducer,
    users: usersReducer,
    options: optionsReducer
  }
})