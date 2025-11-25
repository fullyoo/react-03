import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'



const router = createBrowserRouter([
  {
    path: '/',  //어떠한 url 경로로 접속했을때 

    element: <App />,
    children: [
      {
        path: '',  //어떠한 url 경로로 접속했을때 
        element: <Home /> // element: <div>메인페이지</div> // 해당 컴포넌트를 보여줘
      },
      {
        path: 'about',  //어떠한 url 경로로 접속했을때 
        // element: <div>회사소개 페이지</div> // 해당 컴포넌트를 보여줘
        element: <About />
      },
      {
        path: 'contact',  //어떠한 url 경로로 접속했을때 
        // element: <div>컨텍트 페이지</div> // 해당 컴포넌트를 보여줘
        element: <Contact />
      }

    ]
  },

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
