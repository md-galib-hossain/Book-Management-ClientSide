import {  Flex, Spin } from "antd"
import { useGetAllProductsQuery } from "../../redux/features/product/productApi"
import ProductCard from "./ProductCard"
import { TProduct } from "../../types/product.type"

const Product = () => {
    const {data,isLoading} = useGetAllProductsQuery("")
    if(isLoading){
      return   <Flex justify="center" align="center" >
      <Spin size="large" />
    </Flex>
    }
console.log(data)
  return (
    <div>Product : {data?.data?.result?.length}

<Flex vertical={false} justify={"center"} wrap={"wrap"} gap={"20px"}>
    {
data?.data?.result.map((product : TProduct)=>
<ProductCard key={product._id} product={product} ></ProductCard>
 )

    }
     </Flex>
    
    
    </div>
  )
}

export default Product