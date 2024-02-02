// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Button, Col, Form, Input, Modal, Row } from "antd";
import { TProduct } from "../../types/product.type";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetCreateProduct, setProductForUpdate } from "../../redux/features/product/productSlice";
import { useCreateProductMutation } from "../../redux/features/product/productApi";
import { toast } from "sonner";

type TModalProps = {
    isModalVariantOpen: any;
    setIsModalVariantOpen: any;
    product: TProduct;
  };
const ProductVariantModal = ({
    isModalVariantOpen,
    setIsModalVariantOpen,
    product
  }: TModalProps) => {
    const dispatch = useAppDispatch();
    const productState = useAppSelector((state)=> state.product.createProduct)
    const updatedproductState = useAppSelector((state)=> state.product.updateProduct)
    const [createProduct] = useCreateProductMutation()

  const handleOk = () => {
    setIsModalVariantOpen(false);
    dispatch(resetCreateProduct())

  };

  const handleCancel = () => {
    setIsModalVariantOpen(false);
    dispatch(resetCreateProduct())

  };

  const handleForm = async() => {
    const toastId =  toast.loading('Creating New Product')
const joinedUpdateCreate = { ...productState, ...updatedproductState}
    try{
      const res = await createProduct(joinedUpdateCreate)
      console.log(res)
      dispatch(resetCreateProduct())
      toast.success("Created Product", {id : toastId , duration : 2000})

    }catch(e){
      toast.error("Something Went Wrong", {id : toastId , duration : 2000})
      dispatch(resetCreateProduct())

    }
  }

  return (
    <Modal
    okButtonProps={{ style: { display: "none" } }}
    cancelButtonProps={{ style: { display: "none" } }}
      title="Basic Modal"
      open={isModalVariantOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
         <Form
         onFinish={handleForm}
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
            <label htmlFor="productSimpleId">Assign Simple Id: </label>
            <Input
            placeholder={"abc123"}
              id="productSimpleId"
              type="text"
              onBlur={(e) => dispatch(setProductForUpdate({ productSimpleId: e.target.value }))}
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
            marginTop: "10px"
          }}
        >
          Submit
        </Button>
      </Form>

    </Modal>
  )
}

export default ProductVariantModal