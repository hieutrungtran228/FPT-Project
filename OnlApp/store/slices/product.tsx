import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../../data/SingleProduct";

export const fetchSingleProduct = createAsyncThunk(
    'product/fetchSingleProduct',
    async (data, thunkAPI) => {
        const response = await ProductService.getSingle(data)
        return response.data
    }
)


const ProductSlice = createSlice({
    name : 'Product',
    initialState :{
        product : [],
        items : [],
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.product = action.payload
            })
            .addCase (fetchSingleProduct.rejected, (state, action) => {
                console.log(action.error.message);
            })
    }
})

export const {} = ProductSlice.actions
export default ProductSlice.reducer