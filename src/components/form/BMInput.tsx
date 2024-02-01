import { Flex, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  id: string;
  label?: string;
};

const BMInput = ({ type, id, label }: TInputProps) => {
  return (
    <Flex vertical={true} style={{ marginBottom: "20px" }}>
      {label ? <label>{label} </label> : null}
      <Controller
        name={id} //registering with id
        render={({ field }) => <Input style={{ marginTop: "5px" }} {...field} type={type} id={id} />}
      />
    </Flex>
  );
};

export default BMInput;
