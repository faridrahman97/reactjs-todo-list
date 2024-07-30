import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // This creates the root with the id of root and renders all our react code inside it
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
