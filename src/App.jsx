import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import HomeM from './pages/Home/HomeM'
import LayoutMain from './pages/Layout/LayoutMain'
import Cities from './pages/Cities/Cities'
import CityDetail from './pages/CityDetail/CityDetail'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      {
        path: '/',
        element: <HomeM />
      },
      {
        path: '/cities',
        element: <Cities />
      },
      {
        path: '/citydetail/:id',
        element: <CityDetail />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
