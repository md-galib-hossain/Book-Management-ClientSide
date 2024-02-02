import { Button, Card, Checkbox, CheckboxProps, Flex } from "antd";
import { TProduct } from "../../types/product.type";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  removeSelectProduct,
  setProductForCreate,
  setSelectProduct,
} from "../../redux/features/product/productSlice";
import { useDeleteProductMutation } from "../../redux/features/product/productApi";
import { toast } from "sonner";
import { useState } from "react";
import ProductModal from "./ProductModal";
import ProductVariantModal from "./ProductVariantModal";
type ProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
    const selectedIds = useAppSelector((state) => state.product.selectedIds);
const user = useAppSelector((state)=> state.auth.user?._id)
  const dispatch = useAppDispatch();
  const [deleteProduct] = useDeleteProductMutation();
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`, product);
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
checked = selectedIds?.includes(product._id!)
  }
//   for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVariantOpen, setIsModalVariantOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModalVariant = () => {
    const {  _id,productSimpleId,createdAt,updatedAt,isbn,...filteredProduct  } = product
    dispatch(setProductForCreate({...filteredProduct, createdBy: user }))
    setIsModalVariantOpen(true);
  };

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
      <p><strong>Author:</strong> {product.author}</p>
        <p><strong>ISBN:</strong> {product.isbn}</p>
        <p><strong>Genre:</strong> {product.genre}</p>
        <p><strong>Publisher:</strong> {product.publisher}</p>
        <p><strong>Series:</strong> {product.series}</p>
        <p><strong>Release Date:</strong> {product.releaseDate}</p>
        <p><strong>Language:</strong> {product.language?.join(", ")}</p>
        <p><strong>Book Format:</strong> {product.bookFormat?.join(", ")}</p>
        <p><strong>Book Stock:</strong> {product.productQuantity}</p>
        <Flex
          vertical={false}
          justify={"space-evenly"}
          wrap={"wrap"}
          gap={"10px"}
          style={{marginTop: "20px"}}
        >
          <Button onClick={showModal} type="default" style={{ padding: "5px 20px" }}>
            Update Book
          </Button>
          <ProductModal product={product} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} ></ProductModal>
          <Button
          onClick={showModalVariant}
            type="primary"
            style={{ padding: "5px 20px", backgroundColor: "#99BC85" }}
          >
            Create Variant
          </Button>
          <ProductVariantModal product={product} isModalVariantOpen={isModalVariantOpen} setIsModalVariantOpen={setIsModalVariantOpen}/>
        </Flex>
      </Card>
    </>
  );
};

export default ProductCard;
