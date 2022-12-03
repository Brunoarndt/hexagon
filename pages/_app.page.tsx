import type { AppProps } from "next/app";
import ThemeProvider from "../context/ThemeContext";
import AuthProvider from "../context/AuthContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</AuthProvider>
	);
}
