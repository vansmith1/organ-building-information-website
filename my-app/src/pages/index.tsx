import { Box, Text } from "@chakra-ui/react";
import Navbar from "@/components/navbar";

export default function Index() {
	return (
		<>
			<Navbar/>
			<Box w="50%">
				<Text color="#E0BD67">
					WELCOME TO JSOB
				</Text>
			</Box>
		</>
	)
}