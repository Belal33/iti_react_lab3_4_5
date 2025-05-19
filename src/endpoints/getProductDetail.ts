import baseApi from "./baseApi";
import type { Product } from "./types";

const getProductDetail = async (id: string): Promise<Product | null> =>
	await baseApi
		.get(`/products/${id}`)
		.then((response) => {
			console.log(response.data);
			return response.data as Product;
		})
		.catch((error) => {
			console.error("Error fetching products:", error);
			return null;
		});

export default getProductDetail;
