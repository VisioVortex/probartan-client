import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';
import './index.css'
import AuthProvider from "./providers/AuthProvider";

import {
  RouterProvider,
} from "react-router-dom";

import router from './routes/Router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
      <Analytics />
    </AuthProvider>

  </React.StrictMode>,
)