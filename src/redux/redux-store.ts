import { configureStore, Tuple } from '@reduxjs/toolkit'
import authReducer from './auth-reducer'

let store = configureStore({
	reducer: authReducer,
	// middleware: () => new Tuple(additionalMiddleware, logger),
})
export default store;