import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import HomeM from './pages/Home/HomeM'
import LayoutMain from './pages/Layout/LayoutMain'
import Cities from './pages/Cities/Cities'
import CityDetail from './pages/CityDetail/CityDetail'
import SignIn from './pages/SignIn/SignIn'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useGoogleOneTapLogin } from '@react-oauth/google'
import { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import SignUp from './pages/SignUp/signUp'
import { useDispatch } from "react-redux"
import { login} from './redux/actions/authAction'
import { server } from './Services/cityService'

const router = createBrowserRouter(
[{
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
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/signin',
        element: <SignIn />
      }
    ]
  }
])

function App() {
  const dispatch = useDispatch()
  useGoogleOneTapLogin({
    onSuccess: async credentialResponse => {
      console.log(credentialResponse);
      const infoUser = jwtDecode(credentialResponse.credential)
      const userData={
        email:infoUser.email,
        password: "Admin123*"
      }
      const res = await server.get('/auth/in', userData)
      console.log(res)
      dispatch(login(res.data))
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  // useEffect(()=>{
  //   oneTapLogin()
  // },[])

  return (
    <RouterProvider router={router} />
  )
}

export default App
