import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from './components/Base'
import { navItems } from './utils/data'
import { ThemeProvider } from 'styled-components'
import { theme } from './config/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Base />}>
        {navItems.map((items) =>(
          <Route key={items.id} path={items.path} element={items.page} />
        ))}
      </Route>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
