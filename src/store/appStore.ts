import {configureStore} from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import addToSearchReducer from './addToSearchSlice';

const appStore = configureStore({
  reducer: {
    search: searchReducer,
    addToSearch: addToSearchReducer,
  },
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
