import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store_cities from './redux/store.js'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store_cities}>
        <GoogleOAuthProvider clientId='792160897895-it1a24og8carvq8g9ut5eptu5uacsmcu.apps.googleusercontent.com'>
            <App />
        </GoogleOAuthProvider>
    </Provider>
)
