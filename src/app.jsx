import React from 'react';
import ReactDOM from 'react-dom';
// PACKAGE

// STYLING
import './styles/styles.scss';
import 'normalize.css/normalize.css';
// COMPONENT
import AppRouter from './routers/AppRouter'


ReactDOM.render(<AppRouter />, document.getElementById('app'))

