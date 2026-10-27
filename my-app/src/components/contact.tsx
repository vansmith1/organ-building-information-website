import { useForm, ValidationError } from "@formspree/react";
import { Box, Button, Input, Textarea, Stack, Text } from "@chakra-ui/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xppppnly");

    if (state.succeeded) {
        return <Text fontSize="lg">Thanks! Jeremy will be in touch soon.</Text>;
    }

    return (
        <Box as="form" onSubmit={handleSubmit} w="100%" maxW="500px">
            <Stack spacing={4}>
                <Input id="name" name="name" placeholder="Name" required />

                <Input id="email" type="email" name="email" placeholder="Email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <Input id="phone" type="tel" name="phone" placeholder="Phone (optional)" />

                <Textarea id="message" name="message" placeholder="Message" rows={5} required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <Button type="submit" isLoading={state.submitting} bg="#E0BD67" color="black">
                    Send message
                </Button>
            </Stack>
        </Box>
    );
}