import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {AuthProvider} from "./contexts/authenticaition.jsx";
import jwtInterceptor from "./utils/jwtInterceptor.js";

jwtInterceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
</BrowserRouter>
);
/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/