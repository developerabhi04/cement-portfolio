import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/app.scss";
import App from './App.jsx';


export const server = "https://adanicement-backend.netlify.app/api/v1";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
