import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Body from './Components/Body';
import Search from './Components/Search';
import Help from './Components/Help';
import Cart from './Components/Cart';
import Error from './Components/Error';
import PartnerBoarding from './Components/PartnerBoarding';
import Legal from './Components/Legal';
import Faqs from './Components/Faqs';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import RestaurantCard from './Components/RestaurantCard';
import MenuCard from './Components/MenuCard';


 const appRouter=createBrowserRouter([
  {
   path:"/",
   element:<App/>,
   errorElement:<Error/>,
   children:[
    {
    path:"/",
    element:<Body/>,
   },
   {
    path:"/search",
    element:<Search/>,
   },
   {
    path:"support",
    element:<Help/>,
    children:[
      {
        path:"/support",
        element:<PartnerBoarding/>
      },
      {
        path:"issues/partner-onboarding",
        element:<PartnerBoarding/>
      },
      {
        path:"issues/legal",
        element:<Legal/>
      },
      {
        path:"issues/faq",
        element:<Faqs/>
      }
    ]
   },
   {
    path:"/checkout",
    element:<Cart/>
   },
   {
    path:"/restaurant/:resId",
    element:<MenuCard/>,
   }
  ]
  }
 ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={appRouter}/>
  </>
);


