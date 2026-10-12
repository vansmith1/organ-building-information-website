import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
    return(
        <Box as="footer" py={6} px={8} borderTopWidth="3px" borderColor="gray.400" bg="gray.200">
            <HStack justify="space-between">
                <Text fontSize="sm" color="gray.500">
                    Jeremy Smith's ABN: 600 88344154
                </Text>

                <VStack align="flex-end" gap={0}>
                    <Text fontSize="sm" color="gray.500">Developed by Vanessa Smith</Text>
                    <Text fontSize="sm" color="gray.500">
                        Email: <Link href="mailto:vanessasmiith1@gmail.com">vanessasmiith1@gmail.com</Link>
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                        <Link href="https://www.linkedin.com/in/vansmith1/" target="_blank">To Vanessa Smith's LinkedIn</Link>
                    </Text>
                </VStack>
            </HStack>
        </Box>
  );
}