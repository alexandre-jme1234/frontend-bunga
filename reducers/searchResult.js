import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:  [],
};

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
      saveSearchData: (state, action) => {
        console.log('Dispatch Bungalow _', action.payload)
      state.value = action.payload;
    }
  },
});

export const { saveSearchData } =
    searchResultSlice.actions;
export default searchResultSlice.reducer;
