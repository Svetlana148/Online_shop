/** Creates a root for the React application and attaches it to the DOM element with the id 'root' */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './AppLayout/AppLayout';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';


/**
 * Creates a root for the React application and attaches it to the DOM element with the id 'root'.
 * 
 * @constant {ReactDOM.Root} root - The root of the React application.
 * @see https://reactjs.org/docs/react-dom-client.html#createroot
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* Provider puts the store in the global CONTEXT so that everyone has access to it*/}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();