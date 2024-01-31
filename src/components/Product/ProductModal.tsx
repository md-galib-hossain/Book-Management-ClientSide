import { Button, Col, Input, Modal, Row } from "antd";
import { TProduct } from "../../types/product.type";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetProduct,
  setProductForUpdate,
} from "../../redux/features/product/productSlice";
import { useForm } from "react-hook-form";
import { useUpdateSingleProductMutation } from "../../redux/features/product/productApi";
import { toast } from "sonner";
type TModalProps = {
  isModalOpen: any;
  setIsModalOpen: any;
  product: TProduct;
};

const ProductModal = ({
  isModalOpen,
  setIsModalOpen,
  product,
}: TModalProps) => {
  const {handleSubmit } = useForm();

  const dispatch = useAppDispatch();
  const [updateSingleProduct] = useUpdateSingleProductMutation();

  const productState = useAppSelector((product) => product.product.product);

  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(resetProduct());
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(resetProduct());
  };

  //todo : first time productstate empty silo
  //todo: next time state change korar por update state ashce na
  const onSubmit = async (data: any) => {
    try {
      // console.log(productState,"checkingUpdatedState") //updated product state after setProductForUpdate
      const updatedState = { ...productState, _id: product?._id };

   // todo clearing empty fields
function removeEmptyFields(obj) {
  const filteredObject = Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => {
      if (
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === "string" && value.trim() === "") ||
        value === null ||
        value === undefined ||
        (typeof value === "number" && value === 0)
      ) {
        return false; // Exclude empty arrays, empty strings, null, undefined, and zero values
      }
      return true; // Include non-empty values
    })
  );

  return filteredObject;
}



      const outputObject = removeEmptyFields(updatedState);
      const res = await updateSingleProduct(outputObject);
      console.log(res);
      dispatch(resetProduct());
      toast.success("Product updated successfully");
    } catch (e) {
      toast.error("Something went wrong");
      dispatch(resetProduct())

    }
  };
  return (
    <Modal
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <Row
          justify={"space-between"}
          gutter={[{ xs: 8, sm: 16, md: 24, lg: 24 },{ xs: 4, sm: 8, md: 12, lg: 12 }]}
        >
          <Col span={12}>
            <label htmlFor="productName">Product Name: </label>
            <Input
              defaultValue={product.productName}
              id="productName"
              type="text"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ productName: e.target.value }))
              }
            />
          </Col>

          <Col span={12}>
            <label htmlFor="productPrice">Product Price: </label>
            <Input
              defaultValue={product.productPrice}
              id="productPrice"
              type="number"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ productPrice: parseInt(e.target.value) }))
              }
            />
          </Col>

          <Col span={12}>
            <label htmlFor="productQuantity">Product Quantity: </label>
            <Input
              defaultValue={product.productQuantity}
              id="productQuantity"
              type="number"
              onBlur={(e) =>
                dispatch(
                  setProductForUpdate({ productQuantity: parseInt(e.target.value) })
                )
              }
            />
          </Col>

          <Col span={12}>
            <label htmlFor="language">Language: </label>
            <Input
              defaultValue={product.language}
              id="language"
              type="text"
              onBlur={(e) => dispatch(setProductForUpdate({ language: e.target.value }))}
            />
          </Col>

          <Col span={12}>
            <label htmlFor="genre">Genre: </label>
            <Input
              defaultValue={product.genre}
              id="genre"
              type="text"
              onBlur={(e) => dispatch(setProductForUpdate({ genre: e.target.value }))}
            />
          </Col>

          <Col span={12}>
            <label htmlFor="author">Author: </label>
            <Input
              defaultValue={product.author}
              id="author"
              type="text"
              onBlur={(e) => dispatch(setProductForUpdate({ author: e.target.value }))}
            />
          </Col>

          <Col span={12}>
            <label htmlFor="bookFormat">Book Format: </label>
            <Input
              defaultValue={product.bookFormat}
              id="bookFormat"
              type="text"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ bookFormat: e.target.value }))
              }
            />
          </Col>

          <Col span={12}>
            <label htmlFor="isbn">ISBN: </label>
            <Input
              defaultValue={product.isbn}
              id="isbn"
              type="number"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ isbn: parseInt(e.target.value) }))
              }
            />
          </Col>

          <Col span={12}>
            <label htmlFor="publisher">Publisher: </label>
            <Input
              defaultValue={product.publisher}
              id="publisher"
              type="text"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ publisher: e.target.value }))
              }
            />
          </Col>

          <Col span={12}>
            <label htmlFor="series">Series: </label>
            <Input
              defaultValue={product.series}
              id="series"
              type="text"
              onBlur={(e) => dispatch(setProductForUpdate({ series: e.target.value }))}
            />
          </Col>

          <Col span={12}>
            <label htmlFor="releaseDate">Release Date: </label>
            <Input
              defaultValue={product.releaseDate}
              id="releaseDate"
              type="text"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ releaseDate: e.target.value }))
              }
            />
          </Col>
        </Row>
        <Button
          onClick={handleCancel}
          htmlType="submit"
          style={{
            backgroundColor: "#99BC85",
            color: "white",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default ProductModal;
