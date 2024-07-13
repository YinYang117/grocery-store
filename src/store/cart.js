import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addedToCart(state, action) {
            const id = action.payload
            state[id] = {id: id, count: null}

        },
        removedItem(state,action) {
            const id = action.payload
            delete state[id] //needs to be [id] to point to the key
        }
    }
})

export const { addedToCart, removedItem } = cartSlice.actions
export default cartSlice.reducer
