import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
	reducer: {
		cartStore: cartItemsSlice,
	},
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
