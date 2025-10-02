import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import ResumePage from './pages/ResumePage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />
      },
      {
        path: "/portfolio/:id",
        element: <ProjectDetail />
      },
      {
        path: "/resume",
        element: <ResumePage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/404",
        element: <NotFound />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)
