import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Text } from "@chakra-ui/react";
import { playfair } from "@/fonts";

export default function Services() {
    return (
		<>
			<Navbar/>
			<Text className={playfair.className}>
				Jeremy offers a wide range of skills and services including:
				- Tuning and maintenance
				- Pipe repair
				- Leatherwork
				- Voicing
				- Tonal finishing
				- Restorations
				- Reed organ restorations
			</Text>
			<Footer/>
		</>
	)
}