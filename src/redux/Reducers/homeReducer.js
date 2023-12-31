import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: false,
  clothData: [],
  shoeData: [],
};

export const getClothData = createAsyncThunk("home/getClothData", async () => {
  let res = await axios.get("/product/getfourproducts");
  const data = await res.data;
  return data;
});

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    // add other actions here which are not createAsyncThunk
  },
  extraReducers: (builder) => {
    builder.addCase(getClothData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getClothData.fulfilled, (state, action) => {
      state.loading = false;
      state.clothData = action.payload;
      state.error = false;
    });
    builder.addCase(getClothData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default homeSlice.reducer;
