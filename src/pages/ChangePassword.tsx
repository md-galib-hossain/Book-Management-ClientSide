import { Button } from "antd";
import { useForm } from "react-hook-form";
import {
  useChangepassMutation,
  useLoginMutation,
} from "../redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const [changepass, { isLoading }] = useChangepassMutation();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Password Changing");
    try {
      const userInfo = {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      };

      const res = await changepass(userInfo).unwrap();
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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="currentPassword">Current Password: </label>
          <input
            type="text"
            id="currentPassword"
            {...register("currentPassword")}
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password: </label>
          <input type="text" id="newPassword" {...register("newPassword")} />
        </div>
        <Button htmlType="submit">Submit</Button>
      </form>
      <h2> {user?.email}</h2>
    </>
  );
};

export default ChangePassword;
