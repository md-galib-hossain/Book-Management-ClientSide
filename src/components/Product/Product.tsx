import { Button, Flex, Spin } from "antd";
import { useGetAllProductsQuery } from "../../redux/features/product/productApi";
import ProductCard from "./ProductCard";
import { TProduct } from "../../types/product.type";
import { useAppSelector } from "../../redux/hooks";

const Product = () => {
  const selectedIds = useAppSelector((state) => state.product.selectedIds);
  const { data, isLoading } = useGetAllProductsQuery("");
  if (isLoading) {
    return (
      <Flex justify="center" align="center">
        <Spin size="large" />
      </Flex>
    );
  }
  console.log(data);
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
          Product : {data?.data?.result?.length}
        </h3>
        {selectedIds.length > 0 ? (
          <Button
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
