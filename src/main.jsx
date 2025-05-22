import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouters from './Router/AppRouters.jsx'
import { HashRouter as BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRouters />
  </BrowserRouter>
)
