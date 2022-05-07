/*
 * @Author: hackrabbit
 * @Date: 2022-05-06 11:12:10
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-07 15:39:48
 * @Description: 
 */
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import Form from "./Form"
import Table from "./Table"
import Sider from './Sider'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sider />} />
        <Route path="/list" element={<Table />} />
        <Route path="/add" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
