import { Button, DatePicker, Form, Input, Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useCreateSingleSaleMutation } from "../../redux/features/sale/saleApi";
import { toast } from "sonner";
import { resetSaleProduct } from "../../redux/features/sale/saleSlice";

const SaleModal = ({ isModalOpen, setIsModalOpen, setCount } : any) => {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state)=> state.sale.saleItem.saleQuantity)
  const [saleProduct] = useCreateSingleSaleMutation();
  const { productId, saleQuantity } = useAppSelector(
    (state) => state.sale.saleItem
  );

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleForm = async (value : any) => {
    const antDesignDateObject = new Date(value.saleDate); //converting date
    const saleDate = antDesignDateObject.toISOString();
    console.log(saleDate, value.buyerName, productId, saleQuantity);
    try {
      await saleProduct({
        productId: productId,
        saleQuantity: saleQuantity,
        saleDate: saleDate,
        buyerName: value.buyerName,
      });
      dispatch(resetSaleProduct());
      setCount(0);

      toast.success("Sold successfully");
    } catch (e) {
      toast.error("Something went wrong");
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
      <Form
        onFinish={handleForm}
        {...formItemLayout}
        variant="filled"
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          label="Buyer Name"
          name="buyerName"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Sale Date"
          name="saleDate"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Sale Quantity"
        >
         <strong style={{paddingLeft : "10px"}}
>{quantity}</strong>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button
            onClick={handleCancel}
            type="primary"
            style={{ padding: "5px 30px", backgroundColor: "#99BC85" }}
            htmlType="submit"
          >
            Sell
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SaleModal;
