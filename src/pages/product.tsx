import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getProductDetail from "../endpoints/getProductDetail";
import { Container } from "react-bootstrap";
import type { Product } from "../endpoints/types";
import { ProductCardDetail } from "../components/productCard";

export default function ProductDetails() {
	const { id } = useParams<{ id: string }>();
	const [product, setProduct] = useState<Product | null>(null);
	useEffect(() => {
		// Fetch product details using the id
		id &&
			getProductDetail(id).then((product) => {
				setProduct(product);
			});
	}, [id]);
	return product ? (
		<Container className="px-4">
			<h1>{product?.title}</h1>
			<p>Welcome to the product page!</p>
			<ProductCardDetail product={product} />
		</Container>
	) : (
		<Container
			style={{ height: "50vh" }}
			className="text-danger px-4 text-center d-flex align-items-center justify-content-center"
		>
			<h1>Product Not Found</h1>
		</Container>
	);
}
