import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,Route,createRoutesFromElements,  RouterProvider } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import {Home} from './components/Home/Home'
import {About} from './components/About/About'
import {Contact} from './components/Contact/Contact'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<AppLayout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//       ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout/>}>
    <Route path='' element={<Home/>}></Route>,
    <Route path='/about' element={<About/>}></Route>,
    <Route path='/contact' element={<Contact/>}></Route>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
