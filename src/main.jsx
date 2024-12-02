import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/app.scss";
import App from './App.jsx';


export const server = "https://cement-backend-data.onrender.com/api/v1";
// export const server = "http://localhost:4000/api/v1"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
