import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
import "./styles/app.scss";
import App from './App.jsx';


export const server = "https://cement-backend-data.onrender.com/api/v1";
// export const server = "http://localhost:4000/api/v1";

const rootElement = document.getElementById('root');

// Ensure we only create root once
if (!rootElement) throw new Error('Root element not found');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);








// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <HelmetProvider>
//       <App />
//     </HelmetProvider>
//   </StrictMode>,
// )
