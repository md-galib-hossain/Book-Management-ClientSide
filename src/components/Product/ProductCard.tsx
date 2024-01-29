import { Button, Card, Checkbox, CheckboxProps, Flex } from "antd"
import { TProduct } from "../../types/product.type"
import {  DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../redux/hooks";
import { removeSelectProduct, setSelectProduct } from "../../redux/features/product/productSlice";
type ProductCardProps = {
    product: TProduct;
  };

const ProductCard = ({product} :ProductCardProps  ) => {
    const dispatch = useAppDispatch()
    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`,product);
        if(e.target.checked === true){
            dispatch(setSelectProduct(product._id))

        }if(e.target.checked ===false){

            dispatch(removeSelectProduct(product._id))
        }
    };
  return (
<>
    <Card title={product.productName}
     extra={
        <Flex vertical={false} justify={"space-evenly"} wrap={"wrap"} gap={"20px"}>
                    <Checkbox onChange={onChange}></Checkbox>
                    <Button type="primary" danger shape="default" icon={<DeleteOutlined />} />
{/* <Button type="default" style={{ padding : "5px 7px",}}>Delete</Button> */}

        </Flex>
     }  
     bordered={false} style={{ width: 340 }}>
    <p>{product.productName}</p>
    <p>{product.productPrice}</p>
    <p>{product.productQuantity}</p>
    <Flex vertical={false} justify={"space-evenly"} wrap={"wrap"} gap={"10px"}>
<Button type="default" style={{ padding : "5px 20px",}}>Update Book</Button>
<Button type="primary" style={{ padding : "5px 20px", backgroundColor : "#99BC85"}}>Create Variant</Button>
    </Flex>
  </Card>
  </>
  )
}

export default ProductCard