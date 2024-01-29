import {  Select } from "antd"
import { Controller } from "react-hook-form"

type TSelectProps = {
 
    id: string;
    label? : string
}

const BMSelect = ({id,label} : TSelectProps) => {
const roles = [{
    value: 'user',
    label: 'User',
  },
]

  return (
    <div style={{marginBottom: "20px"}}>
    {
        label ? <label>{label} </label>
        : null
    }
    <Controller
    name={id} //registering with id
   render={({field})=> (
    <Select {...field} options={roles}
    style={{ width: 120 }}
    />

   )}
    
    />
    </div>
    )
}

export default BMSelect