import { createSlice } from '@reduxjs/toolkit';

// hear i defaind initial state
const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,  
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.products.find(item => item.id === newItem.id);
            
            if (existingItem) {
                // I am don hear Update the item's quantity and total price
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                //I am don hear Add new item to cart
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image
                });
            }
            // hear I Update the overall total price and quantity in the cart
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        }
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
