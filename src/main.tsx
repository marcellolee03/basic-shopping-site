import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ShoppingCartProvider } from './context/ShoppingCartContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShoppingCartProvider>
      <App />
    </ShoppingCartProvider>
  </StrictMode>,
)
