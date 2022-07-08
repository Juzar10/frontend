const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalItems: 0,
        totalCost: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
            state.totalItems += 1
            state.totalCost += action.payload.price * action.payload.quantity
            state.totalCost = Math.round(state.totalCost * 100) / 100
        },
        removeFromCart: (state, action) => {
            let id = action.payload;
            state.totalItems -= 1

            for (var i = 0; i < state.items.length; i++) {
                if (state.items[i].id === id) {
                    state.totalCost -= state.items[i].price * state.items[i].quantity
                    state.totalCost = Math.round(state.totalCost * 100) / 100
                    state.items.splice(i, 1);
                    break;
                }

            }


        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice