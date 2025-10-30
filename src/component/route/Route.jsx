import { createBrowserRouter } from "react-router";

import Apps from "../../Design/Apps";
import ErrorPage from "../../Design/ErrorPage";
import Home from "../../Design/Home";
import Installation from "../../Design/Installation";
import MainLayout from "../layout/MainLayout";


const route= createBrowserRouter([
  {
path:'/',
element: <MainLayout/>,
errorElement:<ErrorPage/>,
children:[
 {
   index:true,
  element:<Home/>
 },
 {
  path:'/apps',
  element:<Apps/>
 },
 {
  path: '/installation',
  element:<Installation/>
 },
]
},
])
export default route