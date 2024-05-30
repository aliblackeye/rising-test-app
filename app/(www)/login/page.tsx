import { Metadata } from "next";
import LoginForm from "./_partials/login-form";

export const metadata: Metadata = {
	title: "Login | Rising",
};

export default function Login() {
	return (
		<main className="login-page">
			<LoginForm />
		</main>
	);
}
