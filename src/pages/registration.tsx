import { Container } from "react-bootstrap";
import RegistrationForm from "../components/registrationForm";

export default function Registration() {
	return (
		<Container className="px-4">
			<h1 className="text-center m-0">Sign Up</h1>
			<p className="text-muted mb-3 text-center">Join our community today!</p>
			<RegistrationForm />
		</Container>
	);
}
