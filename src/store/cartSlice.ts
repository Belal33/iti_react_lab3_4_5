import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../endpoints/types";

export interface CartItem {
	product: Product;
	quantity: number;
}

export interface CartItemsState {
	items: CartItem[];
	value: number;
}

const initialState: CartItemsState = {
	items: [],
	value: 0,
};

export const cartItemsSlice = createSlice({
	name: "cartItems",
	initialState,
	reducers: {
		addCartItem: (state, action: PayloadAction<Product>) => {
			// adding new item
			const newItem = action.payload;

			// check if item already exists
			if (!state.items.find((item) => item.product.id === newItem.id)) {
				state.items.push({ product: newItem, quantity: 1 });
				state.value = state.items.length;
			}
		},
		removeCartItem: (state, action: PayloadAction<Product>) => {
			const newItem = action.payload;
			state.items = state.items.filter(
				(item) => item.product.id !== newItem.id
			);
			state.value = state.items.length;
		},
		quantityPlus: (state, action: PayloadAction<Product>) => {
			const newItem = action.payload;
			const index = state.items.findIndex(
				(item) => item.product.id === newItem.id
			);
			state.items[index].quantity++;
		},
		quantityMinus: (state, action: PayloadAction<Product>) => {
			const newItem = action.payload;
			const index = state.items.findIndex(
				(item) => item.product.id === newItem.id
			);
			if (state.items[index].quantity > 1) {
				state.items[index].quantity--;
			} else {
				// remove item
				console.log(newItem);
				state.items = state.items.filter(
					(item) => item.product.id !== newItem.id
				);
				state.value = state.items.length;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { addCartItem, removeCartItem, quantityPlus, quantityMinus } =
	cartItemsSlice.actions;

export default cartItemsSlice.reducer;
