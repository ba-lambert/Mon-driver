// src/services/paymentApi.ts
import { baseApi } from '../baseApi.ts';

interface BookingDetails {
    destination: string;
    currentLocation: string;
    trip: string;
    category: string;
}

interface CreateBookingPayload {
    fullname: string;
    phone: string;
    bookingDetails: BookingDetails;
}

interface PaymentResponse {
    redirectUrl: string;
    token: string;
}

interface CreateBookingResponse {
    message: string;
    paymentResponse: PaymentResponse;
}

const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPayment: builder.mutation<CreateBookingResponse, CreateBookingPayload>({
            query: (payload) => ({
                url: 'bookings/public',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useCreatePaymentMutation } = paymentApi;
export default paymentApi;
