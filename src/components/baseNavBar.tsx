import { Badge, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";
import { useAppSelector } from "../store/store";
import DropDownLang from "./dropDownLang";

const BaseNavLink = ({
	children,
	to,
}: {
	children: React.ReactNode;
	to: string;
}) => (
	<NavLink
		to={to}
		className={({ isActive }) =>
			`${isActive ? "fw-bold" : "fw-normal"} fs-5 text-dark nav-link`
		}
	>
		{children}
	</NavLink>
);

function BaseNavBar() {
	const cart = useAppSelector((state) => state.cartStore);

	return (
		<Container className="position-relative">
			<Navbar
				expand="lg"
				className="top-0 my-4 py-1 bg-body-tertiary px-4 d-flex justify-content-between"
			>
				<Navbar.Brand href="#home" className="fw-semibold">
					React-Bootstrap
				</Navbar.Brand>
				<Nav className="flex-row gap-3 d-flex justify-content-end align-items-center">
					<BaseNavLink to={"/"}>Products</BaseNavLink>
					<BaseNavLink to={"/product"}>Product Details</BaseNavLink>
					<BaseNavLink to={"/register"}>SingUp</BaseNavLink>
					<BaseNavLink to={"/cart"}>
						<div className="position-relative">
							{cart.value > 0 && (
								<Badge
									bg="info"
									style={{ fontSize: "12px", top: "-5px", right: "-5px" }}
									className="position-absolute p-1"
								>
									{cart.value}
								</Badge>
							)}
							<Image width={25} src="cart.png" />
						</div>
					</BaseNavLink>
					<DropDownLang />
				</Nav>
			</Navbar>
		</Container>
	);
}

export default BaseNavBar;
