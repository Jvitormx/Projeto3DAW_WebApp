import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Adm from './Adm.jsx'

const router = createBrowserRouter([
  {
    path: "Projeto3DAW_WebApp/",
    element: <App/>,
  },
  {
    path: "Projeto3DAW_WebApp/projeto/src/Adm",
    element: <Adm/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
