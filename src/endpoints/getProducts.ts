import baseApi from "./baseApi";
import type { Product } from "./types";

const pageSize = 6;

const getProducts = (pageIndex: number): Promise<Product[]> =>
	baseApi
		.get(`/products?limit=${pageSize}&skip=${pageIndex * pageSize}`)
		.then((response) => {
			console.log(response.data.products);
			return response.data.products as Product[];
		})
		.catch((error) => {
			console.error("Error fetching products:", error);
			return [];
		});

export default getProducts;
