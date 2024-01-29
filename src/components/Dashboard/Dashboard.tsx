
import { useGetAllProductsQuery } from "../../redux/features/product/productApi"

const Dashboard = () => {

    const {data : products , isLoading} = useGetAllProductsQuery("")
    if(isLoading){
        return <div>Loading...</div>
    }
  return (
<>
<p>ha</p>

</>
  )
}

export default Dashboard