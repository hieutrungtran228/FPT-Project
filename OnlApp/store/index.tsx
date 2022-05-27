import { configureStore } from "@reduxjs/toolkit"
import ProductReducer from './slices/product'
import Favoritereducer from "./slices/addtocart"
import AuthReducer from './slices/auth'

const store = configureStore({
    reducer: {
        Product: ProductReducer,
        Favorite: Favoritereducer,
        Auth : AuthReducer,
    }
})

export default store