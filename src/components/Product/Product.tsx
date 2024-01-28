import { useGetAllProductsQuery } from "../../redux/features/product/productApi"

const Product = () => {
    const {data} = useGetAllProductsQuery(undefined)
    console.log(data)
  return (
    <div>Product</div>
  )
}

export default Product