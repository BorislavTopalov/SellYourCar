import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import './fonts/SourceSansPro-Regular.ttf';
=======
import { store } from './redux/store';
import { Provider } from 'react-redux';
>>>>>>> 03517ac732d9da9fb4993b840f57d0b45dc9aea0

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
