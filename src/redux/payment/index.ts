// src/services/paymentApi.ts
import { baseApi } from '../baseApi.ts';

interface CreatePaymentPayload {
    amount: number;
    currency: string;
    method: string;
}

interface CreatePaymentResponse {
    id: string;
    status: string;
}

const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPayment: builder.mutation<CreatePaymentResponse, CreatePaymentPayload>({
            query: (payload) => ({
                url: '/payments',
                method: 'POST',
                body: payload,
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useCreatePaymentMutation } = paymentApi;
export default paymentApi;
