import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as menus from "../../services/http/menuHttp"
import { MenuModel } from "../../models/MenuModel";


export const getMenus = createAsyncThunk (
    "menus/getMenus", 
    async () => {
        return await menus.getMenuData();
    }
)

interface MenuState {
    menus: Array<MenuModel>
};

const initialState: MenuState = {
    menus: [],
};

const MenuSlice = createSlice ({
    name:"menus",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMenus.fulfilled, (state, {payload}) => {
            state.menus = payload;
        });
    }
})

export default MenuSlice.reducer;