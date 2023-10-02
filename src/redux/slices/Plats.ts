import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MenuModel } from "../../models/MenuModel";

interface PlatState {
    plats: Array<MenuModel>
};

const initialState: PlatState = {
    plats: [],
};

const PlatSlice = createSlice({
    name: "plats",
    initialState,
    reducers: {
        addPanier(state, action: PayloadAction<MenuModel>) {
            state.plats.push(action.payload)
        }
    },
    extraReducers: (builder) => {

    }
});
export const {addPanier} = PlatSlice.actions;
export default PlatSlice.reducer;
