import { configureStore, createSlice } from "@reduxjs/toolkit";

const photoSlice = createSlice({
  name: "photos",
  initialState: {
    value: [],
    filteredPhotos: [],
    lsData: {
      token: localStorage.getItem("token"),
      user: localStorage.getItem("name"),
    },
  },
  reducers: {
    fetchPhotos: (state, action) => {
      state.value = action.payload;
      state.filteredPhotos = action.payload;
    },
    addItem: (state, action) => {
      state.value.push(action.payload);
      state.filteredPhotos.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter((item) => item._id !== action.payload);
      state.filteredPhotos = state.value.filter(
        (item) => item._id !== action.payload
      );
    },
    filterItems: (state, action) => {
      state.filteredPhotos = state.value.filter((item) =>
        item.label.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setLsData: (state, action) => {
      state.lsData = action.payload;
    },
  },
});

export const { addItem, fetchPhotos, deleteItem, filterItems, setLsData } =
  photoSlice.actions;

export const store = configureStore({
  reducer: {
    photos: photoSlice.reducer,
  },
});
