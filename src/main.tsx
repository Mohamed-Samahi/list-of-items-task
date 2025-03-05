import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ModalProvider } from './context/ModalContext.tsx'
import ModalWrapper from './components/modals/modal-wrapper.tsx'

import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ModalProvider>
          <App />
          <Footer />
          <ModalWrapper />
        </ModalProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
