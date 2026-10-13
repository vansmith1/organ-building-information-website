import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { bebas, playfair } from "@/fonts";

export default function Testimonials() {
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
								Testimonials
							</Text>
						</Flex>
					</Box>
					<Box maxW="800px" minH="calc(100vh - 380px)" mx="auto" px={{ base: 6, md: 12 }} pb={10} pt={7}>
						<Text className={playfair.className}>
							"Jeremy has been tuning and undertaking maintenance work on the organ 
							of St Paul’s Cathedral since 2012. His tuning is immaculate, his 
							maintenance work sound, and his advice clear and timely. I have no 
							hesitation in recommending him to anyone who is the custodian of a 
							pipe organ for first rate tuning and maintenance."
						</Text>
						<Text className={playfair.className}>
							- Philip Nicholls, Director of Music, St Paul’s Cathedral Melbourne.
						</Text>
						<Image src="/images/testimonial-ian.webp" pt={10} alt="Testimonial" w="100%" />
					</Box>
					<Footer/>
				</>
			)
}