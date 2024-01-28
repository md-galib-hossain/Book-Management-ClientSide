import Dashboard from "../components/Dashboard/Dashboard";
import Product from "../components/Product/Product";


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
        name: 'Products',
        path: 'products',
        element: <Product/>,
      },
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

