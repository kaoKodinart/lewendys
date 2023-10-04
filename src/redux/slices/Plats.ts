import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PanierItemModel } from "../../models/PanierItemModel";

interface PlatState {
    plats: Array<PanierItemModel>
};

const initialState: PlatState = {
    plats: [],
};

const PlatSlice = createSlice({
    name: "plats",
    initialState,
    reducers: {
        addPanier(state, action: PayloadAction<PanierItemModel>) {
            state.plats.push(action.payload)
        }
    },
    extraReducers: (builder) => {

    }
});
export const {addPanier} = PlatSlice.actions;
export default PlatSlice.reducer;
