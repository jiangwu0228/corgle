import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const routesConfig = [
  { path: "/", exact: "exact", component: <Navigate to="/search" /> },
  { path: "/search", exact: "exact", component: <Results /> },
  { path: "/images", exact: "", component: <Results /> },
  { path: "/news", exact: "", component: <Results /> },
  { path: "/videos", exact: "", component: <Results /> },
];

const Nav = () => {
  return (
    <div className="p-4">
      <Routes>
        {routesConfig.map((route, index) => (
          <Route {...route.exact} path={route.path} key={index} element={route.component}/>
        ))}
      </Routes>
    </div>
  );
};

export default Nav;
