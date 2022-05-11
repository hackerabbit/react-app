/*
 * @Author: hackrabbit
 * @Date: 2022-05-07 15:39:02
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-11 15:50:25
 * @Description: 
 */
import React, { useEffect } from "react";
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";


const About = React.lazy(() => import("./pages/About"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const List = React.lazy(() => import("./pages/Table"));



export default function App() {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [])
  

  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="dashboard/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="list"
          element={
            <React.Suspense fallback={<>...</>}>
              <List />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}



function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
