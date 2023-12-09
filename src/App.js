import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {


  const router=createBrowserRouter([
     {
      path:"/",
      element:<Header/>,
      children:[
        {index:true,element:<Signup/>},
        {path:"/signin",element:<Signin/>},
        
        {path:"/home",
       
        element: <Home/>
      }
      ]
     }
    

  ])
  return (
    <div className="App">
    <RouterProvider router={router}>
           <Header/>

    </RouterProvider>
        
    </div>
  );
}

export default App;
