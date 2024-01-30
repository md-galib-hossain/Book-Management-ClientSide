import { Flex, Row, Select } from "antd";
import Search from "antd/es/input/Search"
import type { SearchProps } from 'antd/es/input/Search';
import { useGetProductsByNameQuery } from "../../redux/features/product/productApi";
import { useState } from "react";
import SaleProductCard from "./SaleProductCard";
import { useAppSelector } from "../../redux/hooks";

const CreateSale = () => {
    const [name,setName] = useState("")
    const quantity = useAppSelector((state)=> state.sale.saleItem.saleQuantity)

    const onSearch: SearchProps['onSearch'] =(value, _e) => {
        setName(value)
        
    }
    const {data} = useGetProductsByNameQuery(name)

// console.log(data?.data?.result)
  return (
    <div>



        <Row justify={"center"}>
            <Search style={{ width: "30rem" , marginBottom: "20px"}} placeholder="Search You Product By Name" onSearch={onSearch} enterButton/>
           
            </Row> 
            <Flex vertical={false} justify={"center"} wrap={"wrap"} gap={"20px"}>

{
   data?.data?.result?.map ((product : any)=>{
return <SaleProductCard key={product?._id} product={product} quantity={quantity} ></SaleProductCard>

   })
}
</Flex>
    </div>
  )
}

export default CreateSale