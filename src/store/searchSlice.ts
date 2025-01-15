import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface SearchState {
  searchQuery: string;
  showSuggestions: boolean;
  searchSuggestions: string[];
  cache: {[key: string]: string[]};
}

const initialState: SearchState = {
  searchQuery: '',
  showSuggestions: false,
  searchSuggestions: [],
  cache: {},
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setShowSuggestions: (state, action: PayloadAction<boolean>) => {
      state.showSuggestions = action.payload;
    },
    setSearchSuggestions: (state, action: PayloadAction<string[]>) => {
      state.searchSuggestions = action.payload;
    },
    cacheResults: (state, action: PayloadAction<{[key: string]: string[]}>) => {
      state.cache = {...state.cache, ...action.payload};
    },
  },
});

export const {
  setSearchQuery,
  setShowSuggestions,
  setSearchSuggestions,
  cacheResults,
} = searchSlice.actions;
export default searchSlice.reducer;
