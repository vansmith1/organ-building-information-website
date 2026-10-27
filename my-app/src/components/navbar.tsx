import { useState } from "react";
import { bebas } from "@/fonts";
import { Box, Flex, Text, Link, Stack } from "@chakra-ui/react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <Box borderBottom="2px" bg="#2b2b2b" pl={{ base: 4, lg: 10 }} pr={{ base: 4, lg: 10 }} py={2} className={bebas.className}>
            <Flex align="center" justify="space-between">
                <Flex align="center" gap={10}>
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <Box pr="20px">
                            <Text color="#E0BD67" fontSize="3xl" lineHeight="1">JEREMY SMITH</Text>
                            <Text color="#E0BD67" fontSize="3xl" lineHeight="1">ORGAN BUILDER</Text>
                        </Box>
                    </Link>

                    <Flex display={{ base: "none", md: "flex" }} align="center" gap={10}>
                        <Link href="/" style={{ textDecoration: "none" }}>
                            <Text color="white" transition="color 0.3s ease" _hover={{ color: "#E0BD67" }} fontSize="xl" lineHeight="1">HOME</Text>
                        </Link>
                        <Link href="/about" style={{ textDecoration: "none" }}>
                            <Text color="white" transition="color 0.3s ease" _hover={{ color: "#E0BD67" }} fontSize="xl" lineHeight="1">ABOUT ME</Text>
                        </Link>
                        <Link href="/services" style={{ textDecoration: "none" }}>
                            <Text color="white" transition="color 0.3s ease" _hover={{ color: "#E0BD67" }} fontSize="xl" lineHeight="1">SERVICES</Text>
                        </Link>
                        <Link href="/contact" style={{ textDecoration: "none" }}>
                            <Text color="white" transition="color 0.3s ease" _hover={{ color: "#E0BD67" }} fontSize="xl" lineHeight="1">CONTACT</Text>
                        </Link>
                    </Flex>
                </Flex>

                <Link href="tel:0402201023" display={{ base: "none", lg: "block" }} style={{ textDecoration: "none" }}>
                    <Text color="white" fontSize="xl" lineHeight="1" whiteSpace="nowrap">CALL ME: 0402 201 023</Text>
                </Link>

                <Box
                    as="button"
                    display={{ base: "block", md: "none" }}
                    color="white"
                    fontSize="3xl"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? "✕" : "☰"}
                </Box>
            </Flex>

            {open && (
                <Stack display={{ base: "flex", md: "none" }} gap={4} pt={6} pb={2}>
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <Text color="white" fontSize="2xl" lineHeight="1">HOME</Text>
                    </Link>
                    <Link href="/about" style={{ textDecoration: "none" }}>
                        <Text color="white" fontSize="2xl" lineHeight="1">ABOUT ME</Text>
                    </Link>
                    <Link href="/services" style={{ textDecoration: "none" }}>
                        <Text color="white" fontSize="2xl" lineHeight="1">SERVICES</Text>
                    </Link>
                    <Link href="/contact" style={{ textDecoration: "none" }}>
                        <Text color="white" fontSize="2xl" lineHeight="1">CONTACT</Text>
                    </Link>
                    <Link href="tel:0402201023" style={{ textDecoration: "none" }}>
                        <Text color="#E0BD67" fontSize="2xl" lineHeight="1">CALL ME: 0402 201 023</Text>
                    </Link>
                </Stack>
            )}
        </Box>
    );
}