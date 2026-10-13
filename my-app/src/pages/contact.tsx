import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { bebas, playfair } from "@/fonts";
import { Box, Flex, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function Contact() {
	return (
			<>
				<Navbar/>
				<Box
					h="300px"
					bgImage="url(/images/homepage.webp)"
					bgSize="cover"
					bgPosition="center"
					bgAttachment="fixed"
					position="relative"
				>
					<Flex position="absolute" inset="0" bg="blackAlpha.500" align="center" px={{ base: 6, md: 24 }}>
						<Text className={bebas.className} color="white" fontSize={{ base: "5xl", md: "8xl" }} lineHeight="1">
							Contact
						</Text>
					</Flex>
				</Box>
				<Box maxW="750px" h="calc(100vh - 380px)" mx="auto" px={6} pb={16}>
					<Text className={bebas.className} fontSize="4xl" pt="8" color="#ffe298">
						Get in touch!
					</Text>
					<Text className={playfair.className}>
						Call me on: 0402 201 023
					</Text>
					<Text className={playfair.className}>
						Email me: jdmsmith73@gmail.com
					</Text>
				</Box>
				<Footer/>
			</>
		)
}