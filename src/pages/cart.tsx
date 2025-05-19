import { Button, Container } from "react-bootstrap";
import { useAppSelector } from "../store/store";
import CartCard from "../components/cartItem";

export default function CartPage() {
	const cartItems = useAppSelector((state) => state.cartStore);
	return (
		<Container className="px-4">
			<h1 className="text-center">Cart</h1>
			{cartItems.value === 0 && (
				<div
					style={{ height: "50vh" }}
					className="text-center mt-5 fw-bold fs-3"
				>
					Cart is empty
				</div>
			)}
			{cartItems.items.map((item) => (
				<CartCard cartItem={item} key={item.product.id} />
			))}
			{cartItems.value !== 0 && (
				<div className="d-flex justify-content-between my-4">
					<div>
						<span className="fw-bold ">Total Price: </span>
						<span className="fs-3">
							{cartItems.items
								.reduce(
									(acc, item) => acc + item.product.price * item.quantity,
									0
								)
								.toFixed(2)}
							{"$"}
						</span>
					</div>
					<Button variant="dark">Checkout</Button>
				</div>
			)}
		</Container>
	);
}
