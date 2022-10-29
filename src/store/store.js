import { configureStore } from '@reduxjs/toolkit';
import activeUserReducer from './activeUser';
import usersReducer from "./users";
import optionsReducer from "./options";
import filtersReducer from './filters';
import filterredAdsReducer from "./filterredAds";

export const store = configureStore({
  reducer: {
    activeUser: activeUserReducer,
    users: usersReducer,
    options: optionsReducer,
    filters: filtersReducer,
    filterredAds: filterredAdsReducer
  }
})