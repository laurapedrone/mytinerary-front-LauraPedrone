import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store_cities from './redux/store.js'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store_cities}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
            <App />
        </GoogleOAuthProvider>
    </Provider>
)
