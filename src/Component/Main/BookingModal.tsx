import { useState, useEffect } from "react";
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Modal, Button, TextInput, Grid, Select, Checkbox } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {toast} from 'react-toastify'
import { useCreatePaymentMutation } from "../../redux/payment";

interface FormValues {
  fullname: string;
  phone: string;
  pickup: string;
  dropoff: string;
  trip: string;
  category: string;
}

const schema = yup.object().shape({
  fullname: yup.string().required('Full name is required'),
  phone: yup.string().required('Phone number is required'),
  pickup: yup.string().required('Pickup location is required'),
  dropoff: yup.string().required('Dropoff location is required'),
  trip: yup.string().required('Trip type is required'),
  category: yup.string().required('Region is required'),
});

const tripTypes = [
  { value: "Single Trip", label: "Single (3hrs)" },
  { value: "Round Trip", label: "Round" },
  { value: "Day Trip", label: "Day (8hrs)" },
  { value: "Night Trip", label: "Night (8hrs)" },
  { value: "Full Day", label: "Full Day (24hrs)" },
  { value: "Weekly", label: "Weekly" },
  { value: "Monthly", label: "Monthly" },
];

const regions = [
  { value: "Kigali", label: "Kigali" },
  { value: "Upcountry", label: "Upcountry" },
];

const paymentRates = {
  "Single Trip": { "Upcountry": 25000, "Kigali": 15000 },
  "Round Trip": { "Upcountry": 25000, "Kigali": 25000 },
  "Day Trip": { "Upcountry": 25000, "Kigali": 25000 },
  "Night Trip": { "Upcountry": 25000, "Kigali": 25000 },
  "Full Day": { "Upcountry": 40000, "Kigali": 40000 },
  "Weekly": { "Upcountry": null, "Kigali": 200000 },
  "Monthly": { "Upcountry": null, "Kigali": 300000 }
};

const calculatePayment = (trip: string, category: string) => {
  const rate = paymentRates[trip as keyof typeof paymentRates];
  return rate ? rate[category as keyof typeof rate] : null;
};

interface BookDriverProps {
  styles?: string;
}

const BookDriver: React.FC<BookDriverProps> = ({ styles }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [createBooking, { isLoading, isError, isSuccess, data }] = useCreatePaymentMutation();
  const [paymentAmount, setPaymentAmount] = useState<number | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (isSuccess && data?.paymentResponse?.redirectUrl) {
      toast.success('Now proceed to checkout')
      window.location.href = data.paymentResponse.redirectUrl;
    }
  }, [isSuccess, data]);

  const { handleSubmit, control, watch, reset } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      fullname: '',
      phone: '',
      pickup: '',
      dropoff: '',
      trip: '',
      category: '',
    }
  });

  const watchFields = watch(["trip", "category"]);

  useEffect(() => {
    const [trip, category] = watchFields;
    if (trip && category) {
      const amount = calculatePayment(trip, category);
      setPaymentAmount(amount);
    } else {
      setPaymentAmount(null);
    }
  }, [watchFields]);

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    try {
      if (paymentAmount === null) {
        console.error('Invalid trip type or region selected');
        return;
      }

      const bookingData = {
        fullname: formData.fullname,
        phone: formData.phone,
        bookingDetails: {
          destination: formData.dropoff,
          currentLocation: formData.pickup,
          trip: formData.trip,
          category: formData.category,
        }
      };

      console.log("Form Submitted Data:", bookingData);
      await createBooking(bookingData);
      reset();
      close();
    } catch (error) {
      console.error('Failed to book driver:', error);
    }
  };

  const handleClose = () => {
    reset();  // Clear all form inputs
    setPaymentAmount(null);
    setIsConfirmed(false);
    close();  // Close the modal
  };

  return (
      <div className={`flex justify-center items-center h-full ${styles}`}>
        {isError && <p>Something went wrong</p>}
        <Button onClick={open}>Book Now</Button>
        <Modal
            opened={opened}
            onClose={handleClose}
            size="lg"
            title="Book a Driver"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-green-500 p-4 text-white font-bold">Personal Information</div>
            <Grid>
              <Grid.Col span={12}>
                <Controller
                    name="fullname"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextInput
                            {...field}
                            label="Full Name"
                            placeholder="Enter your full name"
                            error={error?.message}
                        />
                    )}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Controller
                    name="phone"
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
            </Grid>
            <div className="bg-green-500 p-4 text-white font-bold">Trip Details</div>
            <Grid>
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
              <Grid.Col span={6}>
                <Controller
                    name="trip"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <Select
                            label="Trip Type"
                            placeholder="Select trip type"
                            data={tripTypes}
                            value={field.value}
                            onChange={field.onChange}
                            error={error?.message}
                        />
                    )}
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Controller
                    name="category"
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
            </Grid>

            {paymentAmount !== null && (
                <div className="p-4 mt-4 border border-green-500">
                  <div className="font-bold">Calculated Payment Amount:</div>
                  <div className="text-lg">{paymentAmount} RWF</div>
                  <Checkbox
                      label="I confirm the payment amount"
                      checked={isConfirmed}
                      onChange={(event) => setIsConfirmed(event.currentTarget.checked)}
                  />
                </div>
            )}

            <div className="flex justify-end mt-4">
              <Button type="submit" disabled={!isConfirmed}>{isLoading ? 'Loading...' : 'Submit'}</Button>
            </div>
          </form>
        </Modal>
      </div>
  );
};

export default BookDriver;
