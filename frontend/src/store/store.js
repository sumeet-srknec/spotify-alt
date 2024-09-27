import { configureStore } from '@reduxjs/toolkit'
import sidepanelReducer from '../components/shared/slices/sidepanelSlice'

const store = configureStore({
    reducer: {
        sidepanel: sidepanelReducer
    }
})

export default store
