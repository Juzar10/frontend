const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalItems: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
            state.totalItems += 1
        }
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice