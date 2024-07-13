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
        },
        addedNumCart(state, action) {
            let {id, count} = action.payload
            console.log('count',count)
            count ? count += 1 : count = 1
            console.log('count after setting', count)
            state[id] = {id, count}
        },
    }
})

export const { addedToCart, removedItem, addedNumCart } = cartSlice.actions
export default cartSlice.reducer
