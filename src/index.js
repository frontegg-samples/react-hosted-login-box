import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';
import {Router} from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const contextOptions = {
    baseUrl: 'https://app-7j5u74t2n7qt.stg.frontegg.com',
    clientId: '4894ec26-7749-465c-a8a3-4e121dc13222'
};

ReactDOM.render(
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
        <Router history={history}>
            <App />
        </Router>
    </FronteggProvider>,
    document.getElementById('root')
);
