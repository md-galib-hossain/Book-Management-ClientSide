import { Button, Col, Form, Input, Row } from "antd";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetProduct,
  setProductForCreate,
  setProductForUpdate,
} from "../../redux/features/product/productSlice";
import { useCreateProductMutation } from "../../redux/features/product/productApi";
import { toast } from "sonner";

const CreateProduct = () => {
  const dispatch = useAppDispatch();
  const productState = useAppSelector((state) => state.product.product);
  const user = useAppSelector((state) => state.auth.user?._id);
  const [createProduct] = useCreateProductMutation();

  //   const onSubmit = (data: any) => {
  //     console.log(data);
  //     dispatch(setProductForCreate(data));
  //     dispatch(resetProduct());
  //     console.log(productState);
  //   };

  const handleForm = async () => {
    const toastid = toast.loading("Creating New Product");
    const insertedState = { ...productState, createdBy: user };
    dispatch(setProductForCreate(insertedState));
    try {
      await createProduct(productState);
      dispatch(resetProduct());
      toast.success("Created Product", { id: toastid, duration: 2000 });
    } catch (e) {
      toast.error("Something Went Wrong", { id: toastid, duration: 2000 });
    }
    console.log(productState);
    // dispatch(resetProduct())
  };

  return (
    <Row justify={"center"}>
      <Form
        onFinish={handleForm}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <Row gutter={[6, 6]}>
          <Col span={12}>
            <label htmlFor="productName">Product Name: </label>
            <Input
              id="productName"
              type="text"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ productName: e.target.value }))
              }
            />
          </Col>
          <Col span={12}>
            <label htmlFor="productSimpleId">Product Simple Id: </label>
            <Input
              id="productSimpleId"
              type="text"
              onBlur={(e) =>
                dispatch(
                  setProductForUpdate({ productSimpleId: e.target.value })
                )
              }
            />
          </Col>
        </Row>

        <Row gutter={[20, 10]}>
          <Col span={12}>
            <label htmlFor="productPrice">Product Price: </label>
            <Input
              id="productPrice"
              type="text"
              onBlur={(e) =>
                dispatch(
                  setProductForUpdate({
                    productPrice: parseInt(e.target.value),
                  })
                )
              }
            />
          </Col>
          <Col span={12}>
            <label htmlFor="productQuantity">Product Quantity: </label>
            <Input
              id="productQuantity"
              type="number"
              onBlur={(e) =>
                dispatch(
                  setProductForUpdate({
                    productQuantity: parseInt(e.target.value),
                  })
                )
              }
            />
          </Col>
        </Row>
        <Row gutter={[20, 10]}>
          <Col span={12}>
            <label htmlFor="releaseDate">Release Date: </label>
            <Input
              id="releaseDate"
              type="text"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ releaseDate: e.target.value }))
              }
            />{" "}
          </Col>
          <Col span={12}>
            <label htmlFor="author">Author: </label>
            <Input
              id="author"
              type="text"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ author: e.target.value }))
              }
            />{" "}
          </Col>
        </Row>
        <Row gutter={[20, 10]}>
          <Col span={12}>
            <label htmlFor="isbn">Isbn Number: </label>
            <Input
              id="isbn"
              type="text"
              onBlur={(e) =>
                dispatch(
                  setProductForUpdate({ isbn: parseInt(e.target.value) })
                )
              }
            />{" "}
          </Col>
          <Col span={12}>
            <label htmlFor="genre">Genre : </label>
            <Input
              id="genre"
              type="text"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ genre: e.target.value }))
              }
            />{" "}
          </Col>
        </Row>
        <Row gutter={[20, 10]}>
          <Col span={12}>
            <label htmlFor="publisher">Publisher Name: </label>
            <Input
              id="publisher"
              type="text"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ publisher: e.target.value }))
              }
            />{" "}
          </Col>
          <Col span={12}>
            <label htmlFor="series">Series Name: </label>
            <Input
              id="series"
              type="text"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ series: e.target.value }))
              }
            />{" "}
          </Col>
        </Row>
        <Row gutter={[20, 10]}>
          <Col span={12}>
            <label htmlFor="language">Language Name: </label>
            <Input
              id="language"
              type="text"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ language: e.target.value }))
              }
            />{" "}
          </Col>
          <Col span={12}>
            <label htmlFor="bookFormat">Book Format: </label>
            <Input
              id="bookFormat"
              type="text"
              onBlur={(e) =>
                dispatch(setProductForUpdate({ bookFormat: e.target.value }))
              }
            />{" "}
          </Col>
        </Row>

        <Button style={{backgroundColor : "#99BC85", marginTop : "20px"}} htmlType="submit">Create Product</Button>
      </Form>
    </Row>
  );
};

export default CreateProduct;
