import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home";
import About from "../components/About";
import Contact from "../components/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        }
      ]
     
    },
   
  ]);