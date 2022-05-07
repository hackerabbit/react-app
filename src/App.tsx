/*
 * @Author: hackrabbit
 * @Date: 2022-05-07 15:39:02
 * @LastEditors: hackrabbit
 * @LastEditTime: 2022-05-07 17:52:43
 * @Description: 
 */
import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./pages/Layout";

const About = React.lazy(() => import("./pages/About"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const List = React.lazy(() => import("./pages/Table"));


export default function App() {
  return (
    <Routes>
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
