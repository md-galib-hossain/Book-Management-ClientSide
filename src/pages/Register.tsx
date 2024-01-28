import { Button } from "antd";
import { useForm } from "react-hook-form";
import {

  useSignupMutation,
} from "../redux/features/auth/authApi";


const Register = () => {
 
  const { register, handleSubmit,reset } = useForm();

  const [signup, { error }] = useSignupMutation();

  const onSubmit = async (data: any) => {
    const userInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
      role: data.role,
    };

    const res = await signup(userInfo).unwrap();
    reset();
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">UserName: </label>
        <input type="text" id="username" {...register("username")} />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="role">Role: </label>
        <input type="text" id="role" {...register("role")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register("password")} />
      </div>

      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Register;
