import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { bebas, cormorant, playfair } from "@/fonts";
import { Box, Flex, Link, SimpleGrid, Image, Stack, Text } from "@chakra-ui/react";

export default function About() {
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
						About Me
					</Text>
				</Flex>
			</Box>
			<Text className={bebas.className} align="center" fontSize="4xl" pt="10" color="#ffe298">
				Jeremy Smith
			</Text>
			<Box maxW="750px" mx="auto" px={6} pb={16}>
				<SimpleGrid
					columns={{ base: 1, md: 2 }}
					gap={{ base: 6, md: 12 }}
					className={playfair.className}
					fontSize="md"
					lineHeight="1.5"
					color="gray.700"
				>
					<Text>
						Jeremy Smith was born in Launceston in 1973. At the age of 5 he began learning the piano,
						his interest in organs developing after he commenced organ lessons with William Pierce at
						St John's Launceston. In 1992 he arrived in Melbourne to begin an apprenticeship with
						Australian Pipe Organs, where he trained in pipe making, tuning and maintenance, and all
						aspects of organ building, and continued his organ studies under Lindsay O'Neill. Jeremy is
						now one of Australia's most experienced and skilled organ builders. Among the instruments he
						has worked on have been the organs in St Patrick's Cathedral Melbourne, St Paul's Cathedral
						Melbourne, and the Melbourne Town Hall. Since 1997 Jeremy has held the position of organist
						at{" "}
						<Link href="https://www.stjamesdandenong.com/" target="_blank" color="#B8943E" textDecoration="underline">
							St James' Church, Dandenong
						</Link>
						.
					</Text>

					<Stack gap={6}>
						<Text>
							From 2012, he worked for Wakeley Pipe Organs, making and restoring major components for
							historical organs and rebuilds.
						</Text>
						<Text>
							Since 2022, Jeremy has looked after multiple pipe organs in Victoria, South Australia
							and Tasmania.
						</Text>
						<Image src="/images/aboutme.webp" alt="Jeremy Smith at an organ console" w="100%" />
					</Stack>
				</SimpleGrid>
				<Text className={bebas.className} align="center" fontSize="4xl" pt="10" color="#ffe298">
					Testimonials
				</Text>
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
			</Box>
			<Footer/>
		</>
    )
}