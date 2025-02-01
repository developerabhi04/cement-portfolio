// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
import "./styles/app.scss";
import App from './App.jsx';
import { Provider } from "react-redux";
import store from './redux/store.js';




const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

// Use a safe global check for the root instance
if (!window.appRoot) {
  window.appRoot = createRoot(rootElement); // Create the root once
}



window.appRoot.render(
  // <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  // </StrictMode>
);
