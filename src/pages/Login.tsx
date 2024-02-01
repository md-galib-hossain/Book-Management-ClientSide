import { Button, Card, Flex, Row } from 'antd';
import { FieldValues} from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { TUser, setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import BMForm from '../components/form/BMForm';
import BMInput from '../components/form/BMInput';

const Login = () => {
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm();
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
    <Row justify={"center"} align={"middle"} style={{height : "100vh"}}>
            <Card bordered={false} style={{ width: 300 ,padding : "20px 10px"}}>

    <BMForm onSubmit={onSubmit}>
    <Flex vertical={true} justify={"center"}>

       <BMInput type={"text"} id={"email"} label={"Email:"}/>
    
        <BMInput type={"text"} id={"password"} label={"Password:"}/>
   
      <Button style={{backgroundColor: "#99BC85", color : "white" }} htmlType="submit">Login</Button>
 </Flex>
    </BMForm>
</Card>
    </Row>
  );
};

export default Login;
