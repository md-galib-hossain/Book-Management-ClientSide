import { Button, Card, Flex } from "antd";
import { TProduct } from "../../types/product.type";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import SaleModal from "./SaleModal";
import { setSaleproduct } from "../../redux/features/sale/saleSlice";

type ProductCardProps = {
  product: TProduct;
  quantity: number;
};

const SaleProductCard = ({ product, quantity }) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    dispatch(setSaleproduct({ productId: product._id, quantity: count }));
    setIsModalOpen(true);

    console.log(product.productName);
  };

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
            onClick={showModal}
            disabled={count <= 0 && true}
            type="primary"
            style={{ padding: "5px 20px", backgroundColor: "#99BC85" }}
          >
            Proceed To Sell
          </Button>

          <SaleModal
            setCount={setCount}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
          <Flex
            vertical={false}
            justify={"space-evenly"}
            wrap={"wrap"}
            gap={"10px"}
            align={"center"}
          >
            {count > 0 ? (
              <Button
                type="text"
                onClick={() => setCount(count > 0 ? count - 1 : count)}
                icon={<MinusOutlined />}
              />
            ) : (
              <Button type="text" disabled icon={<MinusOutlined />} />
            )}
            <p>{count > 0 ? count : "0"}</p>
            <Button
              type="text"
              onClick={() =>
                setCount(product.productQuantity > count ? count + 1 : count)
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
