// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import paymentAPi from './payment/index.ts';

const store = configureStore({
    reducer: {
        // Add the API reducer to your store
        [paymentAPi.reducerPath]: paymentAPi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(paymentAPi.middleware),
});

setupListeners(store.dispatch);

export default store;
