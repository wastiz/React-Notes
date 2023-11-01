import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './slice'

const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})

export default store