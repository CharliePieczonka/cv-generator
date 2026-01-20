import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CvGenerator from './CvGenerator.jsx';
import './styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CvGenerator></CvGenerator>
  </StrictMode>,
)
