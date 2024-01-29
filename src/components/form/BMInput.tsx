import { Input } from "antd"
import { Controller } from "react-hook-form"

type TInputProps = {
    type : string;
    id: string;
    label? : string
}

const BMInput = ({type,id,label} : TInputProps) => {

  return (
    <div style={{marginBottom: "20px"}}>
    {
        label ? <label>{label} </label>
        : null
    }
    <Controller
    name={id} //registering with id
   render={({field})=> (
    <Input {...field} type={type} id={id} />

   )}
    
    />
    </div>
    )
}

export default BMInput