import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../data/auth";
import showNotice from "../../lib/Notice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchAsyncLogin = createAsyncThunk(
    'product/fetchAsyncLogin',
    async (data, thunkAPI) => {
        const response = await AuthService.login(data)
        return response.data
    }
)

export const fetchAsyncRegister = createAsyncThunk(
    'product/fetchAsyncRegister',
    async (data, thunkAPI) => {
        const response = await AuthService.register(data)
        return response.data
    }
)

const authSlice = createSlice({
    name : 'Auth',
    initialState :{
        tokens : [],
        data : [],
        isLogin : false,
    },
    reducers : {
        LogOut : ( state , action ) => {
            AsyncStorage.removeItem('token')
            return {
                ...state,
                isLogin : false,
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncLogin.fulfilled, (state, action) => {
                const {token} = action.payload
                AsyncStorage.setItem('token', token)
                console.log('fetchAsyncLogin');
                return{
                    ...state,
                    isLogin : true,
                }
            })
            .addCase(fetchAsyncRegister.fulfilled, (state, action) => {
                console.log('action', action);
                console.log('fetchAsyncRegister');
            })
            .addCase (fetchAsyncLogin.rejected, (state, action) => {
                console.log(action.error.message);
            })
            .addCase (fetchAsyncRegister.rejected, (state, action) => {
                showNotice()
            })
    }
})

export const {LogOut} = authSlice.actions
export default authSlice.reducer