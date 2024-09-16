import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store'
import { ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { PersistGate } from 'redux-persist/integration/react';
import { ConfigProvider } from './contexts/ConfigContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </PersistGate>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </Provider>
  </StrictMode>,
)
