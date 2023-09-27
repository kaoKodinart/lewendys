import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import contratReducer from "./slices/Contrat";
import platReducer from "./slices/Plats";


export const store = configureStore({
    reducer: {
        plats: platReducer
        // clients: clientsReducer,
        // contrats: contratReducer,
        // devis: devisReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;