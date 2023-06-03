import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalProvider from './GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
)
