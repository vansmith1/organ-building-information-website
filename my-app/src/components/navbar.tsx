// Header component
import { Box, Flex, Text, Link } from "@chakra-ui/react";

export default function Navbar() {
    return(
        <Box borderBottom="2px" bg="#2b2b2b" pl="20%" py={2}>
            <Flex align="center" justify="space-between">
                <Flex align="center" gap={10} cursor="pointer">
                    <Flex direction="column">
                        <Box pr="20px">
                            <Text fontWeight="thin" color="#E0BD67" fontSize="3xl" lineHeight="1">JEREMY SMITH</Text>
                            <Text fontWeight="thin" color="#E0BD67" fontSize="3xl" lineHeight="1">ORGAN BUILDER</Text>
                        </Box>
                    </Flex>
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <Text fontWeight="thin" color="white" transition="color 0.3s ease" _hover={{color: "#E0BD67",}} fontSize="xl" lineHeight="1">HOME</Text>
                    </Link>
                    <Link href="/testimonials" style={{ textDecoration: "none" }}>
                        <Text fontWeight="thin" color="white" transition="color 0.3s ease" _hover={{color: "#E0BD67",}} fontSize="xl" lineHeight="1">TESTIMONIALS</Text>
                    </Link>
                    <Link href="/about" style={{ textDecoration: "none" }}>
                        <Text fontWeight="thin" color="white" transition="color 0.3s ease" _hover={{color: "#E0BD67",}} fontSize="xl" lineHeight="1">ABOUT ME</Text>
                    </Link>
                        <Text fontWeight="thin" color="white" transition="color 0.3s ease" _hover={{color: "#E0BD67",}} fontSize="xl" lineHeight="1">CONTACT</Text>
                    <Box pl="200px">
                        <Text fontWeight="thin" color="white" fontSize="xl" lineHeight="1">CALL ME: 0402 201 023</Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
};
