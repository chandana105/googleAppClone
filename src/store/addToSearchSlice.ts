import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AddToSearchState {
  capturedPhoto: string | null;
  searchQuery: string;
  isSubmitted: boolean;
}

const initialState: AddToSearchState = {
  capturedPhoto: null,
  searchQuery: '',
  isSubmitted: false,
};

const addToSearchSlice = createSlice({
  name: 'addToSearch',
  initialState,
  reducers: {
    setCapturedPhoto: (state, action: PayloadAction<string | null>) => {
      state.capturedPhoto = action.payload;
    },
    clearCapturedPhoto: state => {
      state.capturedPhoto = null;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setIsSubmitted: (state, action: PayloadAction<boolean>) => {
      state.isSubmitted = action.payload;
    },
  },
});

export const {
  setCapturedPhoto,
  clearCapturedPhoto,
  setSearchQuery,
  setIsSubmitted,
} = addToSearchSlice.actions;
export default addToSearchSlice.reducer;
