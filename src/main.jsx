import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx';
import Catalogue from './components/Catalogue.jsx';
import {RouterProvider,createHashRouter} from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <App/>

  },{
    path:"/about",
    element: <About/>
  },{
    path:"/catalogue",
    element: <Catalogue/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
