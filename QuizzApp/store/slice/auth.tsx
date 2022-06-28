import AuthService from "../../data/auth";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchAsyncRegister = createAsyncThunk(
    'auth/fetchAsyncRegister',
    async (data, thunkAPI) => {
        // @ts-ignore
        const response = await AuthService.register(data)
        return response.data
    }
)

export const fetchAsyncLogin = createAsyncThunk(
    'auth/fetchAsyncLogin',
    async (data, thunkAPI) => {
        // @ts-ignore
        const response = await AuthService.login(data)
        return response.data
        
    }
)

const authSlice = createSlice({
    name: 'Auth',
    initialState: {
        tokens: [],
        data: [],
        isLogin: false,
    },
    reducers:
    {
        LogOut: (state, action) => {
            AsyncStorage.removeItem('token')
            return {
                ...state,
                isLogin: false,
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncLogin.fulfilled, (state, action) => {
                const { tokens } = action.payload
                AsyncStorage.setItem('tokens', tokens)
                
                console.log('action', action);
                return {
                    ...state,
                    tokens: tokens,
                }
            })
            .addCase(fetchAsyncRegister.fulfilled, (state, action) => {
                console.log('action', action);  
                alert('create account complete');    
            })
            .addCase(fetchAsyncLogin.rejected, (state, action) => {
                console.log(action.error.message);
            })
            .addCase(fetchAsyncRegister.rejected, (state, action) => {
                console.log(action.error.message);
                alert('fail');   
            })
    }
})

export const { LogOut } = authSlice.actions
export default authSlice.reducer