import { useEffect, useState } from "react";
import getProducts from "../endpoints/getProducts";
import type { Product } from "../endpoints/types";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ProductCard } from "../components/productCard";

export default function Home() {
	const [products, setProducts] = useState<Product[]>([]);
	const [page, setPage] = useState(0);
	useEffect(() => {
		getProducts(page).then((productsData) => {
			console.log(productsData);
			setProducts(productsData);
		});
	}, [page]);
	return (
		<Container>
			<h1 className="text-center">Products</h1>
			<Row xs={1} md={2} lg={3} xl={4} className="g-4 p-3">
				{products?.map((product) => (
					<Col key={product.id}>
						<ProductCard product={product} />
					</Col>
				))}
			</Row>
			{/* Pagination Controls */}
			<Row className="g-4 p-3">
				<Col>
					<Button
						disabled={page === 0}
						onClick={() => {
							if (page > 0) {
								setPage(page - 1);
								window.scrollTo(0, 0);
							}
						}}
						variant="dark"
						className="fw-bold"
					>
						&lt;
					</Button>
				</Col>
				<Col className="d-flex justify-content-center align-items-end fw-bold">
					{" "}
					{page + 1}
				</Col>

				<Col className="d-flex justify-content-end">
					<Button
						disabled={products.length < 6}
						onClick={() => {
							setPage(page + 1);
							window.scrollTo(0, 0);
						}}
						variant="dark"
						className="fw-bold"
					>
						&gt;
					</Button>
				</Col>
			</Row>
		</Container>
	);
}
