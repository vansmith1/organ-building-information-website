import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { bebas, playfair } from "@/fonts";
import { Text } from "@chakra-ui/react";

export default function Contact() {
    return (
    	<>
			<Navbar/>
			<Text className={bebas.className}>
				Contact
			</Text>
			<Text className={bebas.className}>
				Get in touch!
			</Text>
			<Text className={playfair.className}>
				Call me on: 0402 201 023
				Or Email me: jdmsmith73@gmail.com
			</Text>
			<Footer/>
		</>
    )
}