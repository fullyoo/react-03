import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'
import App from './App.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

// hook
// import Effect from './hook/useEffect.jsx'
// import Effect from './hook/useEffect_251127.jsx'
// import Effect from './hook/useRef_251127_me.jsx'
// import Effect from './hook/useRef_251127_02.jsx'
// import Effect from './hook/useRef.jsx'
import Context from './hook/useContext/Main.jsx'
import UseMemo from './hook/useMemo.jsx'
import UseCallback from './hook/useCallback/useCallback.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',  //어떠한 url 경로로 접속했을때 

//     element: <App />,
//     children: [
//       {
//         path: '',  //어떠한 url 경로로 접속했을때 
//         element: <Home /> // element: <div>메인페이지</div> // 해당 컴포넌트를 보여줘
//       },
//       {
//         path: 'about',  //어떠한 url 경로로 접속했을때 
//         // element: <div>회사소개 페이지</div> // 해당 컴포넌트를 보여줘
//         element: <About />
//       },
//       {
//         path: 'contact',  //어떠한 url 경로로 접속했을때 
//         // element: <div>컨텍트 페이지</div> // 해당 컴포넌트를 보여줘
//         element: <Contact />
//       }

//     ]
//   },

// ])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <RouterProvider router={router}></RouterProvider> */}


    {/* hook */}
    {/* <Effect /> */}
    {/* <Context />, */}
    {/* <UseMemo /> */}
    {/* <br />
    <hr /> */}
    <UseCallback />


  </StrictMode>,
)
