import Dashboard from "../components/Dashboard/Dashboard";


export const userPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <Dashboard/>,
  },
  {
    name: 'Product Management',
    children: [
      {
        name: 'Create Product',
        path: 'create-product',
        element: "sf",
      },
      {
        name: 'Update Product',
        path: 'update-product',
        element: "sgf",
      },
      
    ],
  },

];


