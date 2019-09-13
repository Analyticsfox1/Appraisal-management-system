import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/PublicRoutes';
import * as serviceWorker from './serviceWorker';
import 'react-toastify/dist/ReactToastify.css';
import dotenv from 'dotenv'
dotenv.config()

{console.log('process.env',process.env)}
ReactDOM.render(<Routes />, document.getElementById('root'));


serviceWorker.unregister();
