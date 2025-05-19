import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

interface FormErrors {
	name: string[];
	username: string[];
	email: string[];
	password: string[];
	passwordConfirm: string[];
}

// Regular expressions for validation

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default function RegistrationForm() {
	const [formErrors, setFormErrors] = useState<FormErrors>();
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const errors = validateRegistrationForm(e);

		setFormErrors(errors);

		if (Object.values(errors).every((error) => error.length === 0)) {
			alert(
				`Form submitted successfully! 

        Name: ${e.currentTarget.fromName.value}
        Username: ${e.currentTarget.formUsername.value}
        Email: ${e.currentTarget.formEmail.value}
        Password: ${e.currentTarget.formPassword.value}
`
			);
			e.currentTarget.reset();
			navigate("/");
		}
	};

	return (
		<Row>
			<Col>
				<Form
					noValidate
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit(e);
					}}
				>
					<Form.Group className="mb-3" controlId="fromName">
						<Form.Label>Name </Form.Label>
						<Form.Control type="text" placeholder="Enter your Name" />
						{formErrors && <ErrorsBox errors={formErrors.name} />}{" "}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" placeholder="Enter username" />
						{formErrors && <ErrorsBox errors={formErrors.username} />}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							formNoValidate={false}
							type="email"
							placeholder="Enter email"
						/>
						{formErrors && <ErrorsBox errors={formErrors.email} />}{" "}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
						{formErrors && <ErrorsBox errors={formErrors.password} />}
					</Form.Group>
					<Form.Group className="mb-3" controlId="formPasswordConfirm">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type="password" placeholder="Confirm Password" />
						{formErrors && <ErrorsBox errors={formErrors.passwordConfirm} />}
					</Form.Group>

					<Button variant="primary" type="submit">
						Register
					</Button>
				</Form>
			</Col>
		</Row>
	);
}

function ErrorsBox({ errors }: { errors: string[] }) {
	return (
		<ul className="text-danger">
			{errors.map((error) => (
				<li key={error}>{error}</li>
			))}
		</ul>
	);
}

function validateRegistrationForm(e: React.FormEvent<HTMLFormElement>) {
	const errors: FormErrors = {
		name: [],
		username: [],
		email: [],
		password: [],
		passwordConfirm: [],
	};
	const name = e.currentTarget.fromName.value;
	// Name Validation [required];
	if (!name) {
		errors.name.push("Name is required");
	}
	const username = e.currentTarget.formUsername.value;
	// Username Validation [required , no spaces];
	if (!username) {
		errors.username.push("Username is required");
	}
	if (username.includes(" ")) {
		errors.username.push("Username cannot contain spaces");
	}
	const email = e.currentTarget.formEmail.value;
	// Email Validation [required , valid email format];
	if (!email) {
		errors.email.push("Email is required");
	}
	if (!emailRegex.test(email)) {
		errors.email.push("Invalid email format");
	}
	const password = e.currentTarget.formPassword.value;
	// Password Validation [required , at least 8 characters];
	if (!password) {
		errors.password.push("Password is required");
	}
	if (!passwordRegex.test(password)) {
		errors.password.push(
			"Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
		);
	}
	const passwordConfirm = e.currentTarget.formPasswordConfirm.value;
	// Password Confirmation Validation [required , match password];
	if (!passwordConfirm) {
		errors.passwordConfirm.push("Password confirmation is required");
	}
	if (password !== passwordConfirm) {
		errors.passwordConfirm.push("Passwords do not match");
	}
	return errors;
}
