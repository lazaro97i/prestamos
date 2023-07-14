import { createBrowserRouter } from "react-router-dom"
import Clients from "../src/components/Clients"
import Lendings from "../src/components/Lendings"
import Layout from "../src/layouts/Layout"

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Clients />
  // },
  // {
  //   path: '/lendings',
  //   element: <Lendings />
  // }
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Clients />
      },
      {
        path: '/lendings',
        element: <Lendings />
      }
    ]
  }
])

export default router