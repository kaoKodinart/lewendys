import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as auth from "../../services/http/authHttp"
import { UserModel } from "../../models/UserModel";


export const signInWithEmailAndPassword = createAsyncThunk(
    "auth/signInWithEmailAndPassword",
    async ({formdata}: {formdata: FormData} ) => {
    // async ({email, pwd}: {email: string, pwd: string} ) => {
        return await auth.signIn(formdata, {'Content-Type': 'multipart/form-data',});
    }
);

export const getCurentUser = createAsyncThunk (
    "auth/getCurentUser", 
    async () => {
        return await auth.getCurrentUser();
    }
)

interface AuthState {
    // userData: UserDataModel | null,
    user: UserModel | null,
};

const initialState: AuthState = {
    // userData: null,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(signInWithEmailAndPassword.fulfilled, (state, { payload }) => {
            state.user = payload!;
        });
        builder.addCase(getCurentUser.fulfilled, (state, { payload }) => {
            state.user = payload;
        });
    }
});

export default authSlice.reducer