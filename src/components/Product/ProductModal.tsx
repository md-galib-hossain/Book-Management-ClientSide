import { Button, Modal } from "antd";
import { TProduct } from "../../types/product.type";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetProduct, setProduct } from "../../redux/features/product/productSlice";
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
  product
}: TModalProps) => {
  const { register, handleSubmit  } = useForm();

  
  const [updateSingleProduct] = useUpdateSingleProductMutation()
  const dispatch = useAppDispatch();
  const productState = useAppSelector((product)=> product.product.product)

  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(resetProduct())

  };

  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(resetProduct())

  };
  

  //todo : first time productstate empty silo 
  //todo: next time state change korar por update state ashce na
  const onSubmit = async(data: any) => {
    try{
      const productInfo = {...data, _id : product?._id} 
      dispatch(setProduct(productInfo))
  console.log(productState,"checkingUpdatedState") //updated product state after setProduct
      const res = await updateSingleProduct(productState)
      console.log(res)
      dispatch(resetProduct())
toast.success("Product updated successfully")
    }catch(e){
        toast.error("Something went wrong")
    }
  };

  return (
    <Modal
      title="Basic Modal"
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
        <div>
          <label htmlFor="productName">Product Name: </label>
          <input
          defaultValue={product.productName}
            id="productName"
            type="text"
            {...register("productName")}
            style={{
              padding: "0.5rem",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="productPrice">Product Price: </label>
          <input
       defaultValue={product.productPrice}

            id="productPrice"
            type="text"
            {...register("productPrice")}
            style={{
              padding: "0.5rem",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="productQuantity">Product Quantity: </label>
          <input
          defaultValue={product.productQuantity}
            id="productQuantity"
            type="text"
            {...register("productQuantity")}
            style={{
              padding: "0.5rem",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="language">Language: </label>
          <input
          defaultValue={product.language}
            id="language"
            type="text"
            {...register("language")}
            style={{
              padding: "0.5rem",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="genre">Genre: </label>
          <input
          defaultValue={product.genre}
            id="genre"
            type="text"
            {...register("genre")}
            style={{
              padding: "0.5rem",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="author">Author: </label>
          <input
          defaultValue={product.author}
            id="author"
            type="text"
            {...register("author")}
            style={{
              padding: "0.5rem",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="bookFormat">Book Format: </label>
          <input
          defaultValue={product.bookFormat}
            id="bookFormat"
            type="text"
            {...register("bookFormat")}
            style={{
              padding: "0.5rem",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="isbn">ISBN: </label>
          <input
          defaultValue={product.isbn}
            id="isbn"
            type="text"
            {...register("isbn")}
            style={{
              padding: "0.5rem",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="publisher">Publisher: </label>
          <input
          defaultValue={product.publisher}
            id="publisher"
            type="text"
            {...register("publisher")}
            style={{
              padding: "0.5rem",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="series">Series: </label>
          <input
          defaultValue={product.series}
            id="series"
            type="text"
            {...register("series")}
            style={{
              padding: "0.5rem",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label htmlFor="releaseDate">Release Date: </label>
          <input
          defaultValue={product.releaseDate}
            id="releaseDate"
            type="text"
            {...register("releaseDate")}
            style={{
              padding: "0.5rem",
              width: "100%",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <Button
          htmlType="submit"
          style={{
            backgroundColor: "#99BC85",
            color: "white",
            padding: "0.5rem",
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
