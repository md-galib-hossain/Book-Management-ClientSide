import { Button, Card, Flex, Row } from "antd";
import { FieldValues } from "react-hook-form";
import {
  useChangepassMutation,
  
} from "../redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import BMForm from "../components/form/BMForm";
import BMInput from "../components/form/BMInput";

const ChangePassword = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate()

  const [changepass, { isLoading }] = useChangepassMutation();

  const onSubmit = async (data : FieldValues) => {
   
    const toastId = toast.loading("Password Changing");
    try {
      const userInfo = {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      };

      const res = await changepass(userInfo).unwrap();
      console.log(res)
      toast.success("Password Changed", { id: toastId, duration: 2000 });

      dispatch(logout());
      navigate(`/${user!.role}/products`)

      if (isLoading) {
        return <div>Loading...</div>;
      }
    } catch (e) {
        toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "70vh"}} >
      <Card bordered={false} style={{ width: 300 ,padding : "20px 10px"}}>
 
    <BMForm onSubmit={onSubmit}>
      <Flex vertical={true} justify={"center"}>
    
       <BMInput type={"text"} id={"currentPassword"} label={"Current Password:"}/>
    
        <BMInput type={"text"} id={"newPassword"} label={"New Password:"}/>
   
      <Button style={{backgroundColor: "#99BC85", color : "white" }} htmlType="submit">Change Password</Button>
      </Flex>
    </BMForm>
    </Card>

    </Row>
  );
};

export default ChangePassword;
