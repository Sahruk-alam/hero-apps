import { createBrowserRouter } from "react-router";

import Apps from "../../Design/Apps";
import ErrorPage from "../../Design/ErrorPage";
import Home from "../../Design/Home";
import Installation from "../../Design/Installation";
import MainLayout from "../layout/MainLayout";
import DetailsApp from "../../Design/DetailsApp";
import AppError from "../../Design/AppError";
import AnimationLoading from "../Hook/AnimationLoading";


const route= createBrowserRouter([
  {
path:'/',
element: <MainLayout/>,
errorElement:<ErrorPage/>,
hydrateFallbackElement:<AnimationLoading/>,
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
 {
  path: '/apps/:id',
  element: <DetailsApp/>
 },
 
]
},
{
    path: '*',
    element: <ErrorPage /> 
}
])
export default route