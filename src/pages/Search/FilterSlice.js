import { fetchCar } from "./ApiFilter";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCar = createAsyncThunk("car/fetchCar", async () => {
  const response = await fetchCar();
  return response;
});

export const carSlice = createSlice({
  name: "car",
  initialState: {
    data: [],
    initData: [],
    status: "idle",
  },
  reducers: {
    filterCar: (state, action) => {
      const filters = action.payload;
      console.log(filters);
      state.data = state.initData.filter((el) => {
        return Object.keys(filters).every((filter) => {
          if (filter === "availableAt") {
            const rentDate = new Date(filters[filter]);
            const availableDate = new Date(el[filter]);
            console.log(rentDate, availableDate);
            return rentDate.getTime() >= availableDate.getTime();
          }
          if (filter === "capacity") {
            return el[filter] >= filters[filter];
          }
          return filters[filter] === el[filter];
        });
      });
    },

    sortCar: (state, action) => {},
    clearCar: (state) => {
      state.data = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCar.fulfilled, (state, action) => {
        state.status = "idle";
        state.initData = action.payload;
      });
  },
});

export const selectInitCar = (state) => state.car.initData;
export default carSlice.reducer;
export const selectCar = (state) => state.car.data;
export const { filterCar, sortCar, clearCar } = carSlice.actions;
