import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider as Router} from 'react-router-dom'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router router ={router}></Router>
  </React.StrictMode>,
)
