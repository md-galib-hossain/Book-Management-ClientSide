import { logout } from "../../redux/features/auth/authSlice";
import { useGetAllProductsQuery } from "../../redux/features/product/productApi"

const Dashboard = () => {
    const {data : products , isLoading} = useGetAllProductsQuery("")
    if(isLoading){
        return <div>Loading...</div>
    }
  return (
    <div>Dashboard :
        
     
         </div>
  )
}

export default Dashboard