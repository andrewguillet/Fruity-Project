import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 100,
  intervalID: undefined,
};

export const chrono = createSlice({
  name: "chrono",
  initialState,
  reducers: {
    tick: (state, action) => {
      state.value--;
    },
    setUpID: (state, action) => {
      state.intervalID = action.payload;
    },
    reset: (state, action) => {
      (state.value = 100),
        state.intervalID && window.clearInterval(state.intervalID);
      state.intervalID = undefined;
    },
  },
});

// thunk

export function startChrono(action) {
  return function (dispatch, getState) {
    if (getState().chrono.intervalID) return;

    const intervalID = setInterval(() => {
      dispatch(tick());
    }, 1000);
    // permet de direct etre a 99 en lancant un tick de départ sinn on doit att 1 sec
    dispatch(tick());
    dispatch(setUpID(intervalID));
  };
}

export const { tick, setUpID, reset } = chrono.actions;
export default chrono.reducer;
