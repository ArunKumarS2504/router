import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Context from './Context';
import { useState } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './pages/Layout';

const routeModel = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />,
        index:true
      },
      { path: "home", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "aboutus", element: <About /> },
    ],
  },
]);

function App() {
  const [inputVal,setInputVal]= useState("");


  return (
   <Context.Provider value={{inputVal,setInputVal}}>
   
      <RouterProvider router={routeModel}></RouterProvider>
    

   </Context.Provider>
    
  );
}

export default App;
