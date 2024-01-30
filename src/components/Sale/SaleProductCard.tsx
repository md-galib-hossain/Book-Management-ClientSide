import { Button, Card, Flex } from "antd";
import { TProduct } from "../../types/product.type";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setDecrementQuantity,
  setIncrementQuantity,
} from "../../redux/features/sale/saleSlice";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

type ProductCardProps = {
  product: TProduct;
  quantity: number;
};

const SaleProductCard = ({ product, quantity }) => {
  const checkId = useAppSelector((state) => state.sale.productId);
  const dispatch = useAppDispatch();
  console.log(product);

  return (
    <>
      <Card title={product.productName} bordered={false} style={{ width: 340 }}>
        <p>
          <strong>Author:</strong> {product.author}
        </p>
        <p>
          <strong>ISBN:</strong> {product.isbn}
        </p>
        <p>
          <strong>Genre:</strong> {product.genre}
        </p>
        <p>
          <strong>Publisher:</strong> {product.publisher}
        </p>
        <p>
          <strong>Series:</strong> {product.series}
        </p>
        <p>
          <strong>Language:</strong> {product.language.join(", ")}
        </p>
        <p>
          <strong>Book Format:</strong> {product.bookFormat.join(", ")}
        </p>
        <p>
          <strong>Book Stock:</strong> {product.productQuantity}
        </p>
        <Flex
          vertical={false}
          justify={"space-evenly"}
          wrap={"wrap"}
          gap={"10px"}
          style={{ marginTop: "20px" }}
        >
          <Button
            type="primary"
            style={{ padding: "5px 20px", backgroundColor: "#99BC85" }}
          >
            Proceed To Sell
          </Button>
          <Flex
            vertical={false}
            justify={"space-evenly"}
            wrap={"wrap"}
            gap={"10px"}
            align={"center"}
          >
            {quantity > 0 ? (
              <Button
              type="text"
                onClick={() =>
                  dispatch(
                    setDecrementQuantity({
                      quantity: 1,
                      productId: product._id,
                    })
                  )
                }
                icon={<MinusOutlined />}
              />
             
            ) : (
              <Button type="text" disabled  icon={<MinusOutlined />}/>
            )}
            <p>{checkId === product._id ? quantity : "0"}</p>
            <Button
            type="text"
              onClick={() =>
                dispatch(
                  setIncrementQuantity({ quantity: 1, productId: product._id })
                )
              }
              icon={<PlusOutlined />}
            />
              
             
            
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default SaleProductCard;
