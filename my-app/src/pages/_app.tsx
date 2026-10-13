import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { bebas, cormorant } from "@/fonts";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<main className={`${bebas.variable} ${cormorant.variable}`}>
				<Component {...pageProps} />
			</main>
		</ChakraProvider>
	);
}
