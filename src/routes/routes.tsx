

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { routeGenerator } from '../utils/routesGenerator';
import { userPaths } from './user.routes';
import Register from '../pages/Register';
import Login from '../pages/Login';
// import Login from '../components/Login/Login';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    
  },
  {
    path: '/user',
    element: <App />,
    children: routeGenerator(userPaths)
  },
  {
    path: '/login',
    element: <Login />,
  },
   {
    path: '/register',
    element: <Register />,
  },
  //  {
  //   path: '/change-password',
  //   element: <ChangePassword/>,
  // },
]);

export default router;