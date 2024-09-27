import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    closed: true,
    title: ''
}

const sidepanelSlice = createSlice({
    name: 'sidepanel',
    initialState,
    reducers: {
        setClosed: (state) => {
            state.closed = true
        },
        openPanel: (state, action) => {
            state.closed = false
            state.title = action.payload
        }
    }
})

export const { setClosed, openPanel } = sidepanelSlice.actions
export default sidepanelSlice.reducer
