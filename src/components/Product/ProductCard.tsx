import { Button, Card, Checkbox, CheckboxProps, Flex } from "antd";
import { TProduct } from "../../types/product.type";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  removeSelectProduct,
  setSelectProduct,
} from "../../redux/features/product/productSlice";
import { useDeleteProductMutation } from "../../redux/features/product/productApi";
import { toast } from "sonner";
type ProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
    const selectedIds = useAppSelector((state) => state.product.selectedIds);

  const dispatch = useAppDispatch();
  const [deleteProduct] = useDeleteProductMutation();
  const onChange: CheckboxProps["onChange"] = (e) => {
    if (e.target.checked === true) {
      dispatch(setSelectProduct(product._id));
    }
    if (e.target.checked === false) {
      dispatch(removeSelectProduct(product._id));
    }
  };

  const handleSingleDelete = async () => {
    try {
      const res = await deleteProduct(product._id!);
      console.log(res);
      toast.success("Product deleted successfully");
    } catch (e) {
      toast.error("Something went wrong");
    }
  };
let checked = false
  if(selectedIds.length > 0 ){
checked = selectedIds.includes(product._id!)
  }
  return (
    <>
      <Card
        title={product.productName}
        extra={
          <Flex
            vertical={false}
            justify={"space-evenly"}
            wrap={"wrap"}
            gap={"20px"}
          >
            <Checkbox checked={checked} onChange={onChange}></Checkbox>
            <Button
              onClick={handleSingleDelete}
              type="primary"
              style={{backgroundColor: "#F31559"}}
              shape="default"
              icon={<DeleteOutlined />}
            />
            {/* <Button type="default" style={{ padding : "5px 7px",}}>Delete</Button> */}
          </Flex>
        }
        bordered={false}
        style={{ width: 340 }}
      >
        <p>{product.productName}</p>
        <p>{product.productPrice}</p>
        <p>{product.productQuantity}</p>
        <Flex
          vertical={false}
          justify={"space-evenly"}
          wrap={"wrap"}
          gap={"10px"}
        >
          <Button type="default" style={{ padding: "5px 20px" }}>
            Update Book
          </Button>
          <Button
            type="primary"
            style={{ padding: "5px 20px", backgroundColor: "#99BC85" }}
          >
            Create Variant
          </Button>
        </Flex>
      </Card>
    </>
  );
};

export default ProductCard;
