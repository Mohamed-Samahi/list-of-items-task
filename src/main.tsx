import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ModalProvider } from './context/ModalContext.tsx'
import ModalWrapper from './components/modals/modal-wrapper.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <App />
      <ModalWrapper />
    </ModalProvider>
  </StrictMode>,
)
