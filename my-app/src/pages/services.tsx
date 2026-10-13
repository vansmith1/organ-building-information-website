import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { bebas, playfair } from "@/fonts";

const services = [
	{ title: "Tuning and maintenance", image: "/images/jeremy-tuning-pipes.webp" },
	{ title: "Pipe repair", image: "/images/mitred-pipe-repair.webp" },
	{ title: "Leatherwork", image: "/images/bellows-restoration.webp" },
	{ title: "Voicing", image: "/images/jeremy-among-pipes.webp" },
	{ title: "Tonal finishing", image: "/images/homepage.webp" },
	{ title: "Restorations", image: "/images/windchest-workshop.webp" },
	{ title: "Reed organ restorations", image: "/images/windchest-frame.webp" },
];

export default function Services() {
  	return (
		<>
		<Navbar />
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
				Services
			</Text>
			</Flex>
		</Box>
		<Box maxW="1100px" mx="auto" px={{ base: 6, md: 12 }} py={12}>
			<Text className={playfair.className} textAlign="center" fontSize={{ base: "lg", md: "xl" }} color="gray.700" mb={10}>
			Jeremy offers a wide range of skills and services including:
			</Text>
			<SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={8}>
			{services.map((service) => (
				<Box
				key={service.title}
				borderRadius="md"
				overflow="hidden"
				boxShadow="md"
				bg="white"
				transition="transform 0.2s ease"
				_hover={{ transform: "translateY(-4px)" }}
				>
				<Image src={service.image} alt={service.title} w="100%" aspectRatio={4 / 3} objectFit="cover" />
				<Text className={bebas.className} fontSize="2xl" color="#B8943E" textAlign="center" py={4}>
					{service.title}
				</Text>
				</Box>
			))}
			</SimpleGrid>
		</Box>
		<Footer/>
	</>
  );
}