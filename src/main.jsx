// src/main.jsx

import { StrictMode } from 'react'
import { createRoot }    from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'   // ← new
import './index.css'
import App               from './App.jsx'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <HelmetProvider>       {/* ← wrap here */}
      <App />
    </HelmetProvider>
  </StrictMode>
)
