import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ModalProvider } from './context/ModalContext.tsx'
import ModalWrapper from './components/modals/modal-wrapper.tsx'

import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
        <ModalWrapper />
      </ModalProvider>
    </Provider>
  </StrictMode>,
)
