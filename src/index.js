import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
    baseUrl: 'https://auth.loudapi.com',
    clientId: '93447df4-edcc-45e5-8664-9fb8c196cf44'
};

ReactDOM.render(
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);
