import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {StyledEngineProvider} from '@mui/material';
import {client} from "./api/apollo/client";
import {CookiesProvider} from 'react-cookie';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from "@apollo/client";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StyledEngineProvider injectFirst>
        <ApolloProvider client={client}>
            <CookiesProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CookiesProvider>
        </ApolloProvider>
    </StyledEngineProvider>,
);

reportWebVitals();
