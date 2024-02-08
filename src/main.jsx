import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import AdminPage from './components/admin/AdminPage.jsx'
import dataStore from './data/dataStore.js'
import BusinessData from './components/businessData/BusinessData.jsx'
import MeetingList from './components/meeting/MeetingList.jsx'
import ServiceList from './components/service/ServicesList.jsx'
import AddMeeting from './components/meeting/AddMeeting.jsx'
import AddService from './components/service/AddService.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <><div><h1>Error Page</h1></div><h3>404 NOT FOUND</h3></>
//   },
//   {
//     path: '/admin',
//     element: <AdminPage />,
//     children:[
//       {
//         path: "/bussinessDetails",
//         element: <BusinessData />,
//         errorElement: <><div><h1>Error Page</h1></div><h3>404 NOT FOUND</h3></>
//       },
//       {
//         path: '/apoitments',
//         element: <MeetingList />,
//       }
//     ]
//   }
// ])

// dataStore.initializeData();

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode >
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

// export default router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <><div><h1>Error Page</h1></div><h3>404 NOT FOUND</h3></>,
  },
  {
    path: '/admin',
    element: <AdminPage />,
    children: [
      {
        path: "services",
        element:<><ServiceList /><AddService/></> ,
        errorElement: <><div><h1>Error Page</h1></div><h3>404 NOT FOUND</h3></>,
      },
      {
        path: 'appointments',
        element:<MeetingList />,
      },
    ],
  },
]);

dataStore.initializeData();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

export default router;

