import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CvGenerator from './CvGenerator.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CvGenerator></CvGenerator>
  </StrictMode>,
)
