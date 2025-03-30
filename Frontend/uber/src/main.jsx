import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from '../public/context/UserContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <BrowserRouter>
      <App/>{/* <App/> app is the children of UserContext */}
      </BrowserRouter>
      </UserContext>
   
  </StrictMode>,
)
