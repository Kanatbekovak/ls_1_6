import { configureStore, ReducerType} from '@reduxjs/toolkit'
import counterReducer from './counter-slice.js'

export default configureStore({
    reducer: {
        count: counterReducer,
    }
})