import { Button, Row } from "antd";
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
      navigate(`/${user!.role}/dashboard`)

      if (isLoading) {
        return <div>Loading...</div>;
      }
    } catch (e) {
        toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify={"center"} align={"middle"} >
    <BMForm onSubmit={onSubmit}>
    
       <BMInput type={"text"} id={"currentPassword"} label={"Current Password:"}/>
    
        <BMInput type={"text"} id={"newPassword"} label={"New Password:"}/>
   
      <Button htmlType="submit">Change Password</Button>
    </BMForm>
    </Row>
  );
};

export default ChangePassword;
