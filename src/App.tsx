import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, lazy } from "react";
import BaseNavBar from "./components/baseNavBar";
import LangProvider from "./context/pageLangContextProvider";
import LoadingPage from "./components/loadingPage";
import NotFoundPage from "./pages/notFoundPage";

const Home = lazy(() => import("./pages/home"));
const Product = lazy(() => import("./pages/product"));
const CartPage = lazy(() => import("./pages/cart"));
const Registration = lazy(() => import("./pages/registration"));

function App() {
	return (
		<LangProvider>
			<BrowserRouter>
				<BaseNavBar />
				<Suspense fallback={<LoadingPage />}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/product/:id" element={<Product />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/register" element={<Registration />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</LangProvider>
	);
}

export default App;
