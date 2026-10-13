import { Box, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { cormorant } from "@/fonts";

export default function Index() {
	return (
		<>
			<Navbar/>
			<Box w="50%">
				<Text className={cormorant.className} color="#E0BD67">
					Welcome to
					JEREMY SMITH ORGAN BUILDER
					A wealth of knowledge in all aspects of the trade.
				</Text>
			</Box>
			<Footer/>
		</>
	)
}