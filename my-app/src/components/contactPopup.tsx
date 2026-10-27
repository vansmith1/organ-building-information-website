import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import ContactForm from "@/components/contact";
import { bebas } from "@/fonts";

export default function ContactPopup() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Pop-up box */}
            {open && (
                <Box
                    position="fixed"
                    bottom="100px"
                    right={{ base: 4, md: 8 }}
                    w={{ base: "calc(100vw - 32px)", sm: "360px" }}
                    bg="white"
                    borderRadius="lg"
                    boxShadow="2xl"
                    zIndex={1000}
                    overflow="hidden"
                >
                    <Flex bg="#2b2b2b" px={5} py={3} align="center" justify="space-between">
                        <Text className={bebas.className} color="#E0BD67" fontSize="2xl" lineHeight="1">
                            Send Jeremy a message
                        </Text>
                        <Box as="button" color="white" fontSize="xl" onClick={() => setOpen(false)} aria-label="Close">
                            ✕
                        </Box>
                    </Flex>
                    <Box p={5}>
                        <ContactForm />
                    </Box>
                </Box>
            )}

            {/* Floating button */}
            <Box
                as="button"
                position="fixed"
                bottom={{ base: 4, md: 8 }}
                right={{ base: 4, md: 8 }}
                w="64px"
                h="64px"
                bg="#2b2b2b"
                color="#E0BD67"
                borderRadius="full"
                boxShadow="lg"
                zIndex={1000}
                display="flex"
                alignItems="center"
                justifyContent="center"
                transition="transform 0.2s ease"
                _hover={{ transform: "scale(1.08)" }}
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close contact form" : "Open contact form"}
            >
                {open ? (
                    <Text fontSize="2xl">✕</Text>
                ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3C6.5 3 2 6.6 2 11c0 2.2 1.1 4.2 2.9 5.6L4 21l4.7-2.4c1 .3 2.1.4 3.3.4 5.5 0 10-3.6 10-8s-4.5-8-10-8z" />
                    </svg>
                )}
            </Box>
        </>
    );
}