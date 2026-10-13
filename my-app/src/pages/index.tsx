import { Box, Text, Image, Flex } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { playfair, cormorant, bebas } from "@/fonts";

export default function Index() {
	return (
		<>
			<Navbar/>
			<Box position="relative" w="100%" h="calc(100vh - 80px)">
				<Image 
					src="images/homepage.webp" 
					alt="Organ" 
					width="100%" 
					h="calc(100vh - 80px)"
					objectFit="cover"
					objectPosition="center 30%"
				/>
				<Flex
					position="absolute"
					inset="0"
					direction="column"
					align="center"
					justify="center"
					textAlign="center"
					bg="blackAlpha.400"
					px={6}
        		>
					<Text textShadow="0 2px 8px rgba(0, 0, 0, 0.6)" className={cormorant.className} color="#E0BD67" fontSize="8xl" lineHeight="1">
						Welcome to
					</Text>
					<Text textShadow="0 2px 8px rgba(0, 0, 0, 0.6)" className={playfair.className} color="white" fontSize={{ base: "8xl" }} lineHeight="1">
						JEREMY SMITH
					</Text>
					<Text textShadow="0 2px 8px rgba(0, 0, 0, 0.6)" className={playfair.className} color="white" fontSize={{ base: "5xl", md: "7xl" }} lineHeight="1">
						ORGAN BUILDER
					</Text>
					<Text textShadow="0 2px 8px rgba(0, 0, 0, 0.6)" className={bebas.className} color="white" fontSize="l" mt={2}>
						A wealth of knowledge in all aspects of the trade.
					</Text>
				</Flex>
			</Box>
			<Footer/>
		</>
	)
}