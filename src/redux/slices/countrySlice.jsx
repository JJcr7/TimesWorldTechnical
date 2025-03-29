import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch countries from API
export const fetchCountries = createAsyncThunk("countries/fetchCountries", async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
});

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
