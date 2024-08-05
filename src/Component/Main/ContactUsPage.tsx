import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextInput, Textarea, Button, Container, Group, Title, Stack, Box } from '@mantine/core';

const ContactUsPage: React.FC = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            email: "",
            name: "",
            contact: "",
            message: "",
        },
    });

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };

    return (
        <div className='min-h-[80vh] flex items-center justify-center'>
        <Container size="md" py="xl" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <Group align="flex-start" >
                <Box>
                    <Title order={2} style={{ color: '#333' }}>
                        Contact Us
                    </Title>
                    <Title order={1} mt="xs" style={{ color: '#444' }}>
                        Corporate Office
                    </Title>
                    <Stack mt="md" style={{ color: '#666' }}>
                        <p>Airport avenue, KN 5 RD, Gasabo, Kigali-Rwanda</p>
                        <p>Email: monchauffeur.rw@gmail.com</p>
                        <p>Phone: +250 794 415 787 or 6200</p>
                    </Stack>
                </Box>

                <Box style={{ flex: 1 }}>
                    <Title order={3} mb="md" style={{ color: '#333' }}>
                        Send a Message
                    </Title>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack >
                            <Group grow>
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: "Name is required" }}
                                    render={({ field }) => (
                                        <TextInput
                                            label="Name"
                                            placeholder="Name"
                                            {...field}
                                            error={errors.name?.message}
                                        />
                                    )}
                                />
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{
                                        required: "Email is required",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Email address is invalid",
                                        },
                                    }}
                                    render={({ field }) => (
                                        <TextInput
                                            label="Email"
                                            placeholder="Email"
                                            type="email"
                                            {...field}
                                            error={errors.email?.message}
                                        />
                                    )}
                                />
                            </Group>

                            <Controller
                                name="contact"
                                control={control}
                                rules={{
                                    required: "Contact number is required",
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: "Contact number must be 10 digits",
                                    },
                                }}
                                render={({ field }) => (
                                    <TextInput
                                        label="Contact Number"
                                        placeholder="Contact Number"
                                        {...field}
                                        error={errors.contact?.message}
                                    />
                                )}
                            />

                            <Controller
                                name="message"
                                control={control}
                                rules={{ required: "Message is required" }}
                                render={({ field }) => (
                                    <Textarea
                                        label="Message"
                                        placeholder="Your message..."
                                        {...field}
                                        error={errors.message?.message}
                                    />
                                )}
                            />

                            <Button type="submit" color="green" style={{ backgroundColor: '#38a169' }}>
                                Send Message
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Group>
        </Container>
        </div>
    );
};

export default ContactUsPage;
