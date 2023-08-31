import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements, Route,RouterProvider } from'react-router-dom'
import Create from './pages/dashboard/create.jsx'
import Notes from './pages/dashboard/Notes.jsx'
import Layout from "./components/Layout.jsx";
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import Team from './pages/Team.jsx'
import Error from './pages/Error.jsx'
import ShareLayout from './pages/ShareLayout.jsx'
import OpenAccount from './components/OpenAccount.jsx'






const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
        <Route path="" element={<ShareLayout/>}>
            <Route path="/index"  element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/team-member" element={<Team/>}/>
            <Route path="*" element={<Error/>}/>
            <Route path="/open-account" element={<OpenAccount/>}/>
       </Route>


     

        <Route path="" element={<Layout/>}>
            <Route  path="/" index={true} element={<Create/>}/>
            <Route path="/notes" element={<Notes/>}/>
        </Route>
  </Route>
))




// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//        <RouterProvider router={router}/>
//   </React.StrictMode>,
// )







ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
