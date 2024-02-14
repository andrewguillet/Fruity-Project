import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      name: "Mango",
      url: "../../public/images/mango.jpg",
      price: 5,
      id: 12345678,
    },
    {
      name: "Watermelon",
      url: "../../public/images/watermelon.jpg",
      price: 7,
      id: 87654321,
    },
  ],
};

export const fruits = createSlice({
  name: "fruits",
  initialState,
  reducers: {},
  // Permet de declancher un autre reducer en plus de celui de base auquel le reducer n'est pas lié. Une action déclanche tt les reducers, mais les reducers sont liés a leur state
  extraReducers: {
    ["fruitsCart/addOne"]: (state, action) => {
      console.log("Hello from fruits reducer");
    },
  },
});

export default fruits.reducer;
