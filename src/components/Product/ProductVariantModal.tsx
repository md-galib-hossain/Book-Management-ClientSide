import { Modal } from "antd";
import { TProduct } from "../../types/product.type";

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

    
  const handleOk = () => {
    setIsModalVariantOpen(false);

  };

  const handleCancel = () => {
    setIsModalVariantOpen(false);

  };
  return (
    <Modal
      title="Basic Modal"
      open={isModalVariantOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
        <input onChange={(e)=> console.log(e.target.value)} type="text" />

        <div>ProductVariantModal</div>

    </Modal>
  )
}

export default ProductVariantModal