import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Component/Shared/ThemeContext.tsx";
import { MantineProvider } from '@mantine/core';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
                <ThemeProvider>
                    <MantineProvider>
                        <ToastContainer />
                        <App />
                    </MantineProvider>
                </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
