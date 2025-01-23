import React from 'react';
import ReactDOM from 'react-dom/client'; // Utilisation de 'react-dom/client' pour React 18
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Création de la racine
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
