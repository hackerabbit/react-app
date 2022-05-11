/*
 * @Author: hackrabbit
 * @Date: 2022-05-06 11:12:10
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-07 17:32:25
 * @Description: 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import 'antd/dist/antd.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
)







