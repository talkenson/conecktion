import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './samples/electron-store'
import './samples/preload-module'
import './styles/index.css'

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

window.removeLoading()
