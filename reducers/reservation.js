import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { counter: 0, weekCounter: 0, destination: "", date: "" },
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    addDate: (state, action) => {
      state.value.date = action.payload;
    },
    addWeekCounter: (state, action) => {
      state.value.weekCounter = action.payload;
    },
    addCounter: (state, action) => {
      state.value.counter = action.payload;
    },
    addDestination: (state, action) => {
      state.value.destination = action.payload;
    },
  },
});

export const { addDate, addWeekCounter, addCounter, addDestination } =
  reservationSlice.actions;
export default reservationSlice.reducer;
