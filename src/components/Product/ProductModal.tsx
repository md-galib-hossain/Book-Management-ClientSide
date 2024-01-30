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

  
  const dispatch = useAppDispatch();
  const [updateSingleProduct] = useUpdateSingleProductMutation()

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
  // console.log(productState,"checkingUpdatedState") //updated product state after setProduct
     const updatedState = { ...productState, _id : product?._id}

// todo clearing empty fields
function removeEmptyFields(obj) {
  const filteredObject = Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => {
      if (
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === 'string' && value.trim() === '') ||
        value === null ||
        value === undefined
      ) {
        return false; // Exclude empty arrays, empty strings, null, and undefined
      }
      return true; // Include non-empty values
    })
  );

  return filteredObject;
}


const outputObject = removeEmptyFields(updatedState);
  const res = await updateSingleProduct(outputObject)
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
           onBlur={(e)=> dispatch(setProduct({productName: e.target.value}))}
          />
        </div>

        <div>
          <label htmlFor="productPrice">Product Price: </label>
          <input
       defaultValue={product.productPrice}

            id="productPrice"
            type="number"
            onBlur={(e)=> dispatch(setProduct({productPrice: parseInt(e.target.value)}))}

          />
        </div>

        <div>
          <label htmlFor="productQuantity">Product Quantity: </label>
          <input
          defaultValue={product.productQuantity}
            id="productQuantity"
            type="number"
            onBlur={(e)=> dispatch(setProduct({productQuantity: parseInt(e.target.value)}))}

          />
        </div>

        <div>
          <label htmlFor="language">Language: </label>
          <input
          defaultValue={product.language}
            id="language"
            type="text"
            onBlur={(e)=> dispatch(setProduct({language: e.target.value}))}

          />
        </div>

        <div>
          <label htmlFor="genre">Genre: </label>
          <input
          defaultValue={product.genre}
            id="genre"
            type="text"
            onBlur={(e)=> dispatch(setProduct({genre: e.target.value}))}

          />
        </div>

        <div>
          <label htmlFor="author">Author: </label>
          <input
          defaultValue={product.author}
            id="author"
            type="text"
            onBlur={(e)=> dispatch(setProduct({author: e.target.value}))}

          />
        </div>

        <div>
          <label htmlFor="bookFormat">Book Format: </label>
          <input
          defaultValue={product.bookFormat}
            id="bookFormat"
            type="text"
            onBlur={(e)=> dispatch(setProduct({bookFormat: e.target.value}))}

          />
        </div>

        <div>
          <label htmlFor="isbn">ISBN: </label>
          <input
          defaultValue={product.isbn}
            id="isbn"
            type="number"
            onBlur={(e)=> dispatch(setProduct({isbn: parseInt(e.target.value)}))}

          />
        </div>

        <div>
          <label htmlFor="publisher">Publisher: </label>
          <input
          defaultValue={product.publisher}
            id="publisher"
            type="text"
            onBlur={(e)=> dispatch(setProduct({publisher: e.target.value}))}

          />
        </div>

        <div>
          <label htmlFor="series">Series: </label>
          <input
          defaultValue={product.series}
            id="series"
            type="text"
            onBlur={(e)=> dispatch(setProduct({series: e.target.value}))}

          />
        </div>

        <div>
          <label htmlFor="releaseDate">Release Date: </label>
          <input
          defaultValue={product.releaseDate}
            id="releaseDate"
            type="text"
            onBlur={(e)=> dispatch(setProduct({releaseDate: e.target.value}))}

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
