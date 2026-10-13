import { Text } from "@chakra-ui/react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { bebas, playfair } from "@/fonts";

export default function Testimonials() {
  	return (
		<>
			<Navbar/>
			<Text className={bebas.className}>
				TESTIMONIALS
			</Text>
			<Text className={playfair.className}>
				Jeremy has been tuning and undertaking maintenance work on the organ 
				of St Paul’s Cathedral since 2012. His tuning is immaculate, his 
				maintenance work sound, and his advice clear and timely. I have no 
				hesitation in recommending him to anyone who is the custodian of a 
				pipe organ for first rate tuning and maintenance.
				- Philip Nicholls, Director of Music, St Paul’s Cathedral Melbourne.
			</Text>
			<Footer/>
		</>
  	)
}