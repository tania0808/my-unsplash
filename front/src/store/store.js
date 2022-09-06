import { configureStore, createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
    name: 'photos',
    initialState: { value: [] },
    reducers: {
        addPhoto: (state, action) => {
            state.value = action.payload
        },
        photoAdded: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addPhoto, photoAdded } = photoSlice.actions;

export const store = configureStore({
    reducer: {
        photos: photoSlice.reducer
    }
});