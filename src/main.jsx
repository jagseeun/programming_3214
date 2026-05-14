import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import TodoListApp from './TodoListApp'
import HomeApp from './HomeApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeApp />
  </StrictMode>,
)
