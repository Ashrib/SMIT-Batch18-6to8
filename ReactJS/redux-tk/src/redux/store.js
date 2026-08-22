import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice.js'
import counterReducer from './slices/counterSlice.js'


export const store = configureStore({
    reducer:{
        theme: themeReducer,
        counter: counterReducer,
    },
})