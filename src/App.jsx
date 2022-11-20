import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "login", element: <Login />},
    { path: "register", element: <Register /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;