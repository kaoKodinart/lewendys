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
        },
        deletePanierItem(state, action: PayloadAction<PanierItemModel>) {
            state.plats = state.plats.filter(e => e.selectedMenu.id !== action.payload.selectedMenu.id)
        },
        clearPanier(state) {
            state.plats = [];
        },
    },
    extraReducers: (builder) => {

    }
});
export const {addPanier, deletePanierItem, clearPanier} = PlatSlice.actions;
export default PlatSlice.reducer;
