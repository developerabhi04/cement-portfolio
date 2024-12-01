import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/app.scss";
import App from './App.jsx';


export const server = "https://674ceabbb97b1424066d4ff1--adanicement-backend.netlify.app/api/v1";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
