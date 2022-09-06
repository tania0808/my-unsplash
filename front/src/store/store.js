import { configureStore, createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
    name: 'photos',
    initialState: { value: [] },
    reducers: {
        fetchPhotos: (state, action) => {
            state.value = action.payload
        },
        addItem: (state, action) => {
            state.value.push(action.payload)
        },
        deleteItem: (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload)
        }
    }
})

export const { addItem, fetchPhotos, deleteItem } = photoSlice.actions;

export const store = configureStore({
    reducer: {
        photos: photoSlice.reducer
    }
});