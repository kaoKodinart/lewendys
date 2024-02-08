import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as auth from "../../services/http/authHttp"
import { UserModel } from "../../models/UserModel";
import { RootState } from "../store";


export const signInWithEmailAndPassword = createAsyncThunk(
    "auth/signInWithEmailAndPassword",
    async ({formdata}: {formdata: FormData} ) => {
    // async ({email, pwd}: {email: string, pwd: string} ) => {
        return await auth.signIn(formdata, {'Content-Type': 'multipart/form-data',}).then((res) => {
            localStorage.setItem("token", res.token);
            localStorage.setItem("user", JSON.stringify(res.user));
            const user = localStorage.getItem("user");
            const token = localStorage.getItem("token");
            // console.log("emailUser",res.user.email);
            console.log("user",user);
            // console.log("localStorage", JSON.stringify(user));
            // console.log("redux",res);
            return res;
        })
    }
);

export const getCurentUser = createAsyncThunk (
    "auth/getCurentUser", 
    async () => {
        const userDataString = localStorage.getItem("user");
        const userData = JSON.parse(userDataString!);
        return await userData;
        // auth.getCurrentUser().then((res)=>{
        //     console.log("reduxCurrent", res);
        //     return res;
        // });
    }
)

interface AuthState {
    // userData: UserDataModel | null,
    user: UserModel | null,
    isAuthenticated: boolean,

};

const initialState: AuthState = {
    // userData: null,
    user: null,
    isAuthenticated: false,

};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
          },
          logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
          },
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