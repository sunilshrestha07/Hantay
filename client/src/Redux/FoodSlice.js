import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    allFoods: {}
}

const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        getAllData: (state, action) => {
            state.allFoods = action.payload;
        }
    }
});

export const { getAllData } = foodSlice.actions;
export default foodSlice.reducer;

