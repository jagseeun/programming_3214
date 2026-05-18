import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import TodoListApp from './TodoListApp'
import HomeApp from './HomeApp'
import RouterApp from './RouterApp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
