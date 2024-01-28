import { Button } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { TUser, setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
const navigate = useNavigate()
  const [login] = useLoginMutation();

  const onSubmit = async (data : FieldValues) => {
   const toastId =  toast.loading('Loggin in')
   try{
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken) as TUser;

    dispatch(setUser({ user: user, token: res.data.accessToken }));
    toast.success("Logged in", {id : toastId , duration : 2000})
    navigate(`/${user.role}/dashboard`)
   }catch(e){
toast.error("Something went wrong", {id : toastId, duration : 2000})
   }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" {...register('email')} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register('password')} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
