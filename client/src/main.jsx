import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import {Toaster} from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
<GoogleOAuthProvider clientId='944739201020-bvqtbpss93asm78aen9dq578js58l3cm.apps.googleusercontent.com'>
  <BrowserRouter>
      <App />
      <Toaster/>
  </BrowserRouter>
</GoogleOAuthProvider>  
)
