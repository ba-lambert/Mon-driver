import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Button, Grid, TextInput, Modal, Select, Space} from '@mantine/core';
import { DateInput } from '@mantine/dates';
// import {useMediaQuery} from "@mantine/hooks";
import ErrorAlert from "../../../Component/Shared/ErrorAlert.tsx";
import {useEffect} from "react";
import {toast} from "react-toastify";

interface FormData {
    fullname: string;
    username: string;
    gender: string;
    email: string;
    phone: string;
    DOB: string;
    licenseCategory: string;
    licenseNumber: string;
    ID: string;
    location: string;
}

const schema = yup.object().shape({
    fullname: yup.string().required('fullname is required'),
    username: yup.string().required('username is required'),
    gender: yup.string().required('gender is required'),
    email: yup.string().email('Invalid email').required('email is required'),
    phone: yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('phone is required'),
    DOB: yup.string().required('DOB is required'),
    licenseCategory: yup.string().required('licenseCategory is required'),
    licenseNumber: yup.string().required('licenseNumber is required')
        .matches(/^\d{16}$/, 'License number must be exactly 16 digits'),
    ID: yup.string().required('ID is required').matches(/^\d{16}$/, 'License number must be exactly 16 digits'),
    location: yup.string().required('location is required')
});

const NewDriver = ({open, onClose}: { open: boolean; onClose: () => void }) => {
    const {handleSubmit, control, reset} = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    return (
        <Modal opened={open} onClose={onClose} title='Add new Driver' size="70%">
            <form onSubmit={handleSubmit(()=>console.log('sasa'))} noValidate>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Controller
                            name="fullname"
                            control={control}
                            defaultValue=""
                            render={({field, fieldState: {error}}) => (
                                <TextInput
                                    {...field}
                                    label="Full Name"
                                    error={error?.message}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Controller
                            name="username"
                            control={control}
                            defaultValue=""
                            render={({field, fieldState: {error}}) => (
                                <TextInput
                                    {...field}
                                    label="Username"
                                    error={error?.message}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Controller
                            name="gender"
                            control={control}
                            defaultValue=""
                            render={({field, fieldState: {error}}) => (
                                <Select
                                    {...field}
                                    label="Licence Category"
                                    placeholder="gender"
                                    data={['male', 'female']}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({field, fieldState: {error}}) => (
                                <TextInput
                                    {...field}
                                    label="Email"
                                    error={error?.message}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            render={({field, fieldState: {error}}) => (
                                <TextInput
                                    {...field}
                                    label="Phone"
                                    error={error?.message}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Controller
                            name="DOB"
                            control={control}
                            defaultValue=""
                            render={({field, fieldState: {error}}) => (
                                <DateInput
                                    {...field}
                                    valueFormat="YYYY MMM DD"
                                    label="Date input"
                                    placeholder="Date input" error={error?.message}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Controller
                            name="licenseCategory"
                            control={control}
                            defaultValue=""
                            render={({field, fieldState: {error}}) => (
                                <Select
                                    {...field}
                                    label="Licence Category"
                                    placeholder="Pick driver category"
                                    data={['A', 'B', 'C', 'D', 'D1', 'B1']}
                                    error={error?.message}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Controller
                            name="licenseNumber"
                            control={control}
                            defaultValue=""
                            render={({field, fieldState: {error}}) => (
                                <TextInput
                                    {...field}
                                    label="License Number"
                                    error={error?.message}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Controller
                            name="ID"
                            control={control}
                            defaultValue=""
                            render={({field, fieldState: {error}}) => (
                                <TextInput
                                    {...field}
                                    label="ID"
                                    error={error?.message}
                                />
                            )}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Controller
                            name="location"
                            control={control}
                            defaultValue=""
                            render={({field, fieldState: {error}}) => (
                                <TextInput
                                    {...field}
                                    label="Location"
                                    error={error?.message}
                                />
                            )}
                        />
                    </Grid.Col>
                </Grid>
                <Space h="md" />
                <div className='flex justify-around'>
                <Button onClick={onClose} disabled={isLoading} w={300} color="red">
                    Cancel
                </Button>
                <Button type='submit' disabled={isLoading} variant='filled' w={300} color="green">
                    Submit
                </Button>
                </div>
            </form>
        </Modal>
    );
};

export default NewDriver;
