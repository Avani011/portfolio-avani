import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    showDropdown: false
}

const dropSlice = createSlice({
    name: "dropdown",
    initialState,
    reducers: {
        isOpen(state) {
            state.showDropdown = !state.showDropdown;
        },
        isClose(state) {
            state.showDropdown = false;
        },
    }
});

const store = configureStore({
    reducer: {
       dropdown: dropSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const {isClose, isOpen} = dropSlice.actions;
export default store;