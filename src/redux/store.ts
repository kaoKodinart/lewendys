import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import platReducer from "./slices/Plats";
import menuReducer from "./slices/Menus";
import authReducer from "./slices/Auth";
import commandeReducer from "./slices/Commandes";


export const store = configureStore({
    reducer: {
        plats: platReducer,
        menus: menuReducer,
        auth: authReducer,
        userCommande: commandeReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;