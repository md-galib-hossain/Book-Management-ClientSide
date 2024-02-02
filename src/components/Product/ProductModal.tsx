// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Button, Col, Input, Modal, Row } from "antd";
import { TProduct } from "../../types/product.type";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetCreateProduct,
  
  resetUpdateProduct,
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

  const productState = useAppSelector((state) => state.product.updateProduct);

  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(resetUpdateProduct());
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(resetUpdateProduct());
  };


  const onSubmit = async () => {
    try {
      // console.log(productState,"checkingUpdatedState") //updated product state after setProductForUpdate
      const updatedState = { ...productState, _id: product?._id };

//    // todo clearing empty fields
// function removeEmptyFields(obj : any) {
//   const filteredObject = Object.fromEntries(
//     Object.entries(obj).filter(([ value]) => {
//       if (
//         (Array.isArray(value) && value.length === 0) ||
//         (typeof value === "string" && value.trim() === "") ||
//         value === null ||
//         value === undefined ||
//         (typeof value === "number" && value === 0)
//       ) {
//         return false; // Exclude empty arrays, empty strings, null, undefined, and zero values
//       }
//       return true; // Include non-empty values
//     })
//   );

//   return filteredObject;
// }



//       const outputObject = removeEmptyFields(updatedState);
      const res = await updateSingleProduct(updatedState);
      console.log(res);
      dispatch(resetUpdateProduct());
      toast.success("Product updated successfully");
    } catch (e) {
      toast.error("Something went wrong");
      dispatch(resetUpdateProduct());

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
              onChange={(e) =>
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
              onChange={(e) =>
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
              onChange={(e) =>
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
              onChange={(e) => dispatch(setProductForUpdate({ language: e.target.value }))}
            />
          </Col>

          <Col span={12}>
            <label htmlFor="genre">Genre: </label>
            <Input
              defaultValue={product.genre}
              id="genre"
              type="text"
              onChange={(e) => dispatch(setProductForUpdate({ genre: e.target.value }))}
            />
          </Col>

          <Col span={12}>
            <label htmlFor="author">Author: </label>
            <Input
              defaultValue={product.author}
              id="author"
              type="text"
              onChange={(e) => dispatch(setProductForUpdate({ author: e.target.value }))}
            />
          </Col>

          <Col span={12}>
            <label htmlFor="bookFormat">Book Format: </label>
            <Input
              defaultValue={product.bookFormat}
              id="bookFormat"
              type="text"
              onChange={(e) =>
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
              onChange={(e) =>
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
              onChange={(e) =>
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
              onChange={(e) => dispatch(setProductForUpdate({ series: e.target.value }))}
            />
          </Col>

          <Col span={12}>
            <label htmlFor="releaseDate">Release Date: </label>
            <Input
              defaultValue={product.releaseDate}
              id="releaseDate"
              type="text"
              onChange={(e) =>
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
