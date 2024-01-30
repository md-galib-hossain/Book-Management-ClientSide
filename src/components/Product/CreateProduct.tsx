import { Button, Col, Flex, Row } from "antd"
import BMForm from "../form/BMForm"
import BMInput from "../form/BMInput"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { resetProduct, setProduct } from "../../redux/features/product/productSlice"

const CreateProduct = () => {
    const dispatch = useAppDispatch()
const productState = useAppSelector((state)=> state.product.product)

    const onSubmit =(data: any) => {
      dispatch(setProduct(data))
      dispatch(resetProduct())
     console.log(productState)
    }


  return (

<Row justify={"center"}>
    <BMForm onSubmit={onSubmit}>
<Row gutter={[6,6]}>
<Col >

<BMInput id={"productName"} type={"text"} label={"productName:"}/>
</Col>
<Col >

<BMInput id={"productSimpleId"} type={"text"} label={"productSimpleId:"}/>
</Col>
</Row>
 
<Row gutter={[20,10]}>
<Col >

      <BMInput id={"productPrice"} type={"text"} label={"productPrice:"}/>
      </Col>
      <Col >

      <BMInput id={"productQuantity"} type={"text"} label={"productQuantity:"}/>
      </Col>
      </Row>
<Row gutter={[20,10]}>
<Col >

<BMInput id={"releaseDate"} type={"text"} label={"releaseDate:"}/>
</Col>
      <Col >

      <BMInput id={"author"} type={"text"} label={"author:"}/>  
      </Col>
      </Row>
<Row gutter={[20,10]}>
<Col >

<BMInput id={"isbn"} type={"text"} label={"isbn:"}/>
           </Col>
      <Col >

      <BMInput id={"genre"} type={"text"} label={"genre:"}/>       </Col>
      </Row>
<Row gutter={[20,10]}>
<Col >

<BMInput id={"publisher"} type={"text"} label={"publisher:"}/>
          </Col>
      <Col >

      <BMInput id={"series"} type={"text"} label={"series:"}/>        </Col>
      </Row>
<Row gutter={[20,10]}>
<Col >

<BMInput id={"language"} type={"text"} label={"language:"}/>
      
      </Col>
      <Col >

      <BMInput id={"bookFormat"} type={"text"} label={"bookFormat:"}/>
      </Col>
      </Row>

      <Button htmlType="submit">Create Product</Button>
    </BMForm>
    </Row>

  )
}

export default CreateProduct