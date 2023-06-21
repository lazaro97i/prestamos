import { createBrowserRouter } from "react-router-dom"
import Clients from "../src/components/Clients"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Clients />
  }
])

export default router