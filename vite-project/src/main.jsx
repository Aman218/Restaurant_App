import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './Component/About.jsx';
import Offers from './Component/Offers.jsx';
import Signin from './Component/Signin.jsx';
import PageNFound from './Component/PageNotFound.jsx';
import Body from './Component/Body.jsx';
import RestaurantMenu from './Component/RestaurantMenu.jsx';



const approuter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<PageNFound/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },

      {
        path:'/about',
        element:<About/>
       },
       {
        path:'/offers',
        element:<Offers/>
       },
       {
        path:'/restaurant/:id',
        element:<RestaurantMenu/>
       },
      
    ]
  },
  {
    path:'/sign-in',
    element:<Signin/>
   }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={approuter} />
  </StrictMode>,
)
