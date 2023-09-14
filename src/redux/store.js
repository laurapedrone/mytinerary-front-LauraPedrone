import { configureStore } from '@reduxjs/toolkit'
import citiesReducer from './reducers/citiesReducer'
import authReducer from './reducers/authReducer'

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    users:authReducer
  },
})

export default store