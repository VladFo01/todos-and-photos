import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Photos from './pages/Photos';
import { CssBaseline } from "@mui/material";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/:todoId" element={<Todo />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}

export default App;
