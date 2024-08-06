import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Component/Shared/ThemeContext.tsx";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '@mantine/dates/styles.css';
import {Provider} from "react-redux";
import store from './redux/store.ts';
import {createTheme} from "@mantine/core";


const theme = createTheme({
    fontFamily:'Maven Pro,sans-serif',
})
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
                <ThemeProvider>
                    <MantineProvider theme={theme}>
                        <ToastContainer />
                        <App />
                    </MantineProvider>
                </ThemeProvider>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
