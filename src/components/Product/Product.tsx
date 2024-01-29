import { Button, Flex, Spin } from "antd";
import { useDeleteMultipleProductsMutation, useGetAllProductsQuery } from "../../redux/features/product/productApi";
import ProductCard from "./ProductCard";
import { TProduct } from "../../types/product.type";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetSelectProduct } from "../../redux/features/product/productSlice";
import { toast } from "sonner";

const Product = () => {
  const Ids = useAppSelector((state) => state.product.selectedIds);
  const [deleteMultipleProducts] = useDeleteMultipleProductsMutation()
  const dispatch = useAppDispatch()
  const { data, isLoading } = useGetAllProductsQuery("");
  if (isLoading) {
    return (
      <Flex justify="center" align="center">
        <Spin size="large" />
      </Flex>
    );
  }
 const handleMultipleDelete =async () => {
try{
  console.log(Ids)
const res = await deleteMultipleProducts(Ids)
console.log(res);
dispatch(resetSelectProduct())
toast.success("Products deleted successfully")

}catch(e){
  toast.error("Something Went Wrong")

}
 }
  return (
    <div>
      <Flex
        vertical={false}
        justify={"space-between"}
        wrap={"wrap"}
        gap={"20px"}
        style={{ marginBottom: "20px" }}
      >
        <h3 style={{ height : "35px"}}>
          Products : {data?.data?.result?.length}
        </h3>
        {Ids.length > 0 ? (
          <Button
          onClick={handleMultipleDelete}
            type="primary"
            style={{ padding: "5px 20px", backgroundColor: "#F31559" }}
          >
            Delete Selected
          </Button>
        ) : null}
      </Flex>
      <Flex vertical={false} justify={"center"} wrap={"wrap"} gap={"20px"}>
        {data?.data?.result.map((product: TProduct) => (
        
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </Flex>
    </div>
  );
};

export default Product;
