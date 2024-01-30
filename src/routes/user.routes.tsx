import Dashboard from "../components/Dashboard/Dashboard";
import CreateProduct from "../components/Product/CreateProduct";
import Product from "../components/Product/Product";
import CreateSale from "../components/Sale/CreateSale";
import SaleHistory from "../components/Sale/SaleHistory";
import ChangePassword from "../pages/ChangePassword";


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
        element: <CreateProduct/>,
      },
  
      
    ],
  },
  {
    name: 'Sales Management',
    children: [
      {
        name: 'Create Sale',
        path: 'create-sale',
        element: <CreateSale/>,
      },
      {
        name: 'Sale History',
        path: 'create-product',
        element: <SaleHistory/>,
      },
  
      
    ],
  },
  {
    name: 'ChangePassword',
    path: 'change-password',
    element: <ChangePassword/>,
  },

];


