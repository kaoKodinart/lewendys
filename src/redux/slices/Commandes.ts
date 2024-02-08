import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as commandes from "../../services/http/commandeHttp"
import { CommandeModel } from "../../models/CommandeModel";


export const getUserCommandeData = createAsyncThunk (
    "commandes/getCommandes", 
    async (id: string) => {
        return await commandes.getUserCommandeData(id);
    }
)

interface CommandeState {
    commandes: Array<CommandeModel>
};

const initialState: CommandeState = {
    commandes: [],
};

const CommandeSlice = createSlice ({
    name:"commandes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserCommandeData.fulfilled, (state, {payload}) => {
            state.commandes = payload;
        });
    }
})

export default CommandeSlice.reducer;