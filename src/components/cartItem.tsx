import { Button, Card, Col, Row } from "react-bootstrap";
import { quantityMinus, quantityPlus, type CartItem } from "../store/cartSlice";
import { useAppDispatch } from "../store/store";

export default function CartCard({ cartItem }: { cartItem: CartItem }) {
	const appDispatch = useAppDispatch();
	return (
		<Card style={{ maxWidth: "40rem" }} className=" mx-auto  mb-3">
			<Row className="g-0">
				<Col md={3}>
					<img
						src={cartItem.product.images[0]}
						className="img-fluid rounded-start"
						alt="..."
					/>
				</Col>
				<Col md={8}>
					<Card.Body>
						<Card.Title>{cartItem.product.title}</Card.Title>
						<Card.Text className="m-0">
							Price:{cartItem.product.price} $
						</Card.Text>
						<Card.Text>
							Subtotal: {cartItem.quantity * cartItem.product.price} $
						</Card.Text>
						<Card.Text className="m-0 d-flex justify-content-between">
							<Button
								onClick={() => appDispatch(quantityPlus(cartItem.product))}
								variant="info"
								className="py-1 px-2 text-center fw-bold"
							>
								+
							</Button>
							Quantity: {cartItem.quantity}
							<Button
								onClick={() => appDispatch(quantityMinus(cartItem.product))}
								variant="info"
								className="py-1 px-2 text-center fw-bold"
							>
								{" "}
								-
							</Button>
						</Card.Text>
					</Card.Body>
				</Col>
			</Row>
		</Card>
	);
}
