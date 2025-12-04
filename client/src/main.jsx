import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "jquery";
import "../public/plugins/fontawesome-free/css/all.min.css"
import "../public/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
import "../public/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
import "../public/plugins/jqvmap/jqvmap.min.css"
import "../public/dist/css/adminlte.min.css"
import "../public/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
import "../public/plugins/daterangepicker/daterangepicker.css"
import "../public/plugins/summernote/summernote-bs4.min.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
