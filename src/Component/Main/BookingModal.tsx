import { useState, useEffect } from "react";
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Modal, Button, TextInput, Grid, Select, Paper } from "@mantine/core";
import { TimeInput } from '@mantine/dates';
import { useDisclosure } from "@mantine/hooks";

interface FormValues {
  name: string;
  phoneNo: string;
  email: string;
  pickup: string;
  dropoff: string;
  time: string;
  vehicleType: string;
  region: string;
  tripType: string;
  proceedWithPayment: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phoneNo: yup.string().required('Phone number is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  pickup: yup.string().required('Pickup location is required'),
  dropoff: yup.string().required('Dropoff location is required'),
  time: yup.string().required('Time is required'),
  vehicleType: yup.string().required('Vehicle type is required'),
  region: yup.string().required('Region is required'),
  tripType: yup.string().required('Trip type is required'),
  proceedWithPayment: yup.boolean().oneOf([true], 'You must agree to proceed with payment').required()
});

const vehicleTypes = [
  { value: "Sedan", label: "Sedan" },
  { value: "SUV", label: "SUV" },
  { value: "Van", label: "Van" },
];

const regions = [
  { value: "Kigali", label: "Kigali" },
  { value: "Upcountry", label: "Upcountry" },
];

const tripTypes = [
  { value: "Single (3hrs)", label: "Single (3hrs)" },
  { value: "Round", label: "Round" },
  { value: "Day (8hrs)", label: "Day (8hrs)" },
  { value: "Night (8hrs)", label: "Night (8hrs)" },
  { value: "Full Day (24hrs)", label: "Full Day (24hrs)" },
  { value: "Weekly", label: "Weekly" },
  { value: "Monthly", label: "Monthly" },
  { value: "Others", label: "Others" },
];

const prices: Record<string, Record<string, number | null>> = {
  "Kigali": {
    "Single (3hrs)": 15000,
    "Round": 25000,
    "Day (8hrs)": 25000,
    "Night (8hrs)": 25000,
    "Full Day (24hrs)": 40000,
    "Weekly": 200000,
    "Monthly": 300000,
  },
  "Upcountry": {
    "Single (3hrs)": 25000,
    "Round": 25000,
    "Day (8hrs)": 25000,
    "Night (8hrs)": 25000,
    "Full Day (24hrs)": 40000,
    "Weekly": null,
    "Monthly": null,
  }
};

interface BookDriverProps {
  styles?: string;
}

const BookDriver: React.FC<BookDriverProps> = (styles) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [price, setPrice] = useState<number | null>(null);

  const { handleSubmit, control, reset, trigger, watch } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      phoneNo: '',
      email: '',
      pickup: '',
      dropoff: '',
      time: '',
      vehicleType: '',
      region: '',
      tripType: '',
      proceedWithPayment: false // Default value for checkbox
    }
  });

  const region = watch('region');
  const tripType = watch('tripType');
  // const proceedWithPayment = watch('proceedWithPayment');

  useEffect(() => {
    if (region && tripType) {
      const selectedPrice = prices[region][tripType];
      setPrice(selectedPrice !== null ? selectedPrice : null);
    } else {
      setPrice(null);
    }
  }, [region, tripType]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log("Form Submitted Data:", data);
      // Perform any other actions such as booking the driver
      reset();
      setCurrentStep(0);
      close();
    } catch (error) {
      console.error('Failed to book driver:', error);
    }
  };

  const handleNext = async () => {
    const currentStepFields = steps[currentStep].fields;

    const isStepValid = await trigger(currentStepFields as (keyof FormValues)[]);

    if (isStepValid) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        handleSubmit(onSubmit)();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    reset();  // Clear all form inputs
    close();  // Close the modal
  };

  const steps = [
    {
      label: "Personal Information",
      fields: ["name", "phoneNo", "email"],
      component: (
        <div>
          <div className="bg-green-500 p-4 text-white font-bold">Personal Information</div>
          <Grid>
            <Grid.Col span={12}>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextInput
                    {...field}
                    label="Name"
                    placeholder="Enter your full name"
                    error={error?.message}
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Controller
                name="phoneNo"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextInput
                    {...field}
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    error={error?.message}
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextInput
                    {...field}
                    label="Email"
                    placeholder="Enter your email address"
                    error={error?.message}
                  />
                )}
              />
            </Grid.Col>
          </Grid>
        </div>
      ),
    },
    {
      label: "Trip Details",
      fields: ["pickup", "dropoff", "time", "vehicleType", "region", "tripType", "proceedWithPayment"], // Added checkbox field
      component: (
        <div>
          <div className="bg-green-500 p-4 text-white font-bold">Booking Information</div>
          <Grid>
            <Grid.Col span={6}>
              <Controller
                name="time"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TimeInput
                    {...field}
                    label="Time"
                    placeholder="Select time"
                    error={error?.message}
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Controller
                name="vehicleType"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    label="Vehicle Type"
                    placeholder="Select vehicle type"
                    data={vehicleTypes}
                    value={field.value}
                    onChange={field.onChange}
                    error={error?.message}
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Controller
                name="region"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    label="Region"
                    placeholder="Select region"
                    data={regions}
                    value={field.value}
                    onChange={field.onChange}
                    error={error?.message}
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Controller
                name="tripType"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    label="Trip Type"
                    placeholder="Select trip type"
                    data={tripTypes}
                    {...field}
                    error={error?.message}
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Controller
                name="pickup"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextInput
                    {...field}
                    label="Pickup Location"
                    placeholder="Enter pickup location"
                    error={error?.message}
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Controller
                name="dropoff"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextInput
                    {...field}
                    label="Dropoff Location"
                    placeholder="Enter dropoff location"
                    error={error?.message}
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Controller
                name="proceedWithPayment"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <CustomCheckbox
                    {...field}
                    label="I agree to proceed with the payment"
                    checked={field.value}
                    onChange={(event) => field.onChange(event.currentTarget.checked)}
                    onBlur={field.onBlur}
                    name="proceedWithPayment"
                    error={error?.message}
                  />
                )}
              />
            </Grid.Col>
          </Grid>
          {price && (
            <Paper shadow="xs" p="md">
              <div className="flex justify-between">
                <div className="font-semibold">Estimated Price:</div>
                <div>{price} RWF</div>
              </div>
            </Paper>
          )}
        </div>
      ),
    },
  ];
  return (
    <div>
      <Button onClick={open} variant='filled' color="rgb(34 197 94)" size='md' radius={`${styles.styles}`}>Book Driver</Button>
      <Modal opened={opened} onClose={handleClose} title="Book Driver">
        <form onSubmit={handleSubmit(onSubmit)}>
          {steps[currentStep].component}
          <div className="mt-4 flex justify-between">
            {currentStep > 0 && <Button variant="outline" onClick={handlePrevious}>Previous</Button>}
            <Button onClick={handleNext}>{currentStep < steps.length - 1 ? "Next" : "Submit"}</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default BookDriver;

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  name: string;
  disabled?: boolean;
  ref?: React.RefCallback<HTMLInputElement>;
  error?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, checked, onChange, onBlur, name, disabled, ref, error }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          disabled={disabled}
          ref={ref}
        />
        {label}
      </label>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};