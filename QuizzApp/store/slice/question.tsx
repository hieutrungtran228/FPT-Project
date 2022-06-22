import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../../data/auth";

export const fetchQuestion = createAsyncThunk(
    'question/fetchQuestion',
    async (data, thunkAPI) => {
        const response = await AuthService.list(data)
        return response.data
    }
)

const QuestionService  = createSlice({
    name : 'Question',
    initialState : {
        items : [],
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestion.fulfilled, (state, action) => {
                state.items = action.payload 
            })
            .addCase(fetchQuestion.rejected, (state, action) => {
                console.log(action.error.message);
            })
    }
})

export const {} = QuestionService.actions
export default QuestionService.reducer