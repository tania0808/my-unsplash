import { configureStore, createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
    name: 'photos',
    initialState: { 
        value: [] ,
        filteredPhotos: []
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
            state.value = state.value.filter(item => item._id !== action.payload);
            state.filteredPhotos = state.value.filter(item => item._id !== action.payload);
        },
        filterItems: (state, action) => {
            state.filteredPhotos = state.value.filter(item => item.label.toLowerCase().includes(action.payload.toLowerCase()))
        }
    }
})

export const { addItem, fetchPhotos, deleteItem, filterItems } = photoSlice.actions;

export const store = configureStore({
    reducer: {
        photos: photoSlice.reducer
    }
});