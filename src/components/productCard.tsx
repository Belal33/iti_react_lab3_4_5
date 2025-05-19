import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import type { Product } from "../endpoints/types";
import { Link } from "react-router";
import { useAppDispatch } from "../store/store";
import { addCartItem } from "../store/cartSlice";

export function ProductCard({ product }: { product: Product }) {
	const appDispatch = useAppDispatch();
	// const cart = useAppSelector((state) => state.cartStore);
	return (
		<Card className=" h-100 ">
			<Badge
				bg={product.stock > 0 ? "success" : "danger"}
				className="position-absolute top-0 start-0 m-2"
			>
				{product.stock > 0 ? "In Stock" : "Out of Stock"}
			</Badge>
			<Card.Img variant="top" src={product.thumbnail} />
			<Card.Body className="d-flex flex-column justify-content-between">
				<Link to={`/product/${product.id}`}>
					<Card.Title className=" text-dark">{product.title} </Card.Title>
				</Link>
				<Card.Text className="text-muted m-0">{product.price} $</Card.Text>
				<Card.Text className="text-muted m-0">{product.brand}</Card.Text>
				<Card.Text className="text-muted m-0">{product.category}</Card.Text>

				<Card.Text>{product.description}</Card.Text>
				<Button
					onClick={(e) => {
						e.preventDefault();
						appDispatch(addCartItem(product));
						e.currentTarget.disabled = true;
						e.currentTarget.innerHTML = "Added to Cart!";
					}}
					variant="outline-dark"
				>
					Add to Cart
				</Button>
			</Card.Body>
		</Card>
	);
}
export function ProductCardDetail({ product }: { product: Product }) {
	const appDispatch = useAppDispatch();
	return (
		<Card className=" d-flex flex-row py-2">
			<Badge
				bg={product.stock > 0 ? "success" : "danger"}
				className="position-absolute top-0 start-0 m-2"
			>
				{product.stock > 0 ? "In Stock" : "Out of Stock"}
			</Badge>
			<Card.Body className="d-flex flex-column justify-content-between">
				<Row>
					<Col md={3}>
						<Card.Img variant="top" src={product.thumbnail} />
					</Col>
					<Col md={8}>
						<Card.Title className="fs-2 text-dark">{product.title} </Card.Title>
						<Card.Text className="">
							<span className="fw-semibold">Price: </span>
							{product.price} $
						</Card.Text>
						<Card.Text className="m-0 text-muted">
							<span className="fw-semibold">Items available: </span>{" "}
							{product.stock}
						</Card.Text>
						<Card.Text className="m-0 text-muted">
							<span className="fw-semibold">Dimensions: </span>
							{product.dimensions.width} x {product.dimensions.height} x{" "}
							{product.dimensions.depth} cm
						</Card.Text>
						<Card.Text className="m-0 text-muted">
							<span className="fw-semibold">Rating</span>
							{product.rating}/5
						</Card.Text>
						<Card.Text className="m-0 text-muted">
							<span className="fw-semibold">Brand:</span> {product.brand}
						</Card.Text>
						<Card.Text className=" text-muted">
							<span className="fw-semibold">Category:</span> {product.category}
						</Card.Text>

						<Card.Text>{product.description}</Card.Text>
						<Button
							onClick={(e) => {
								e.preventDefault();
								appDispatch(addCartItem(product));
								e.currentTarget.disabled = true;
								e.currentTarget.innerHTML = "Added to Cart!";
							}}
							variant="dark"
						>
							Add to Cart
						</Button>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}
