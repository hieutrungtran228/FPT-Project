import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slice/auth'
import QuestionReducer from './slice/question'

const  store = configureStore({
    reducer: {
        Auth : AuthReducer,
        Question : QuestionReducer,
    }
})

export default store