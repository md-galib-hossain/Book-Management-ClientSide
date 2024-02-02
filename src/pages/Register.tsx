import { Button, Card, Flex, Row } from "antd";
import {

  useSignupMutation,
} from "../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import BMForm from "../components/form/BMForm";
import BMInput from "../components/form/BMInput";
import BMSelect from "../components/form/BMSelect";


const Register = () => {
  const navigate = useNavigate()


  const [signup] = useSignupMutation();

  const onSubmit = async (data: any) => {
    console.log(data)
    const toastId =  toast.loading('Creating Account')

    try{
      const userInfo = {
        username: data.username,
        email: data.email,
        password: data.password,
        role: data.role,
      };
  
      const res = await signup(userInfo).unwrap();
      toast.success("Successfully Created Account", {id : toastId , duration : 2000})
console.log(res)
      navigate(`/login`)
    }catch(e){
      toast.error("Something Went Wrong", {id : toastId , duration : 2000})

    }
 

   
  };

  return (
    <Row justify={"center"} align={"middle"} style={{height : "100vh"}}>
            <Card bordered={false} style={{ width: 300 ,padding : "20px 10px"}}>

    <BMForm onSubmit={onSubmit}>
    <Flex vertical={true} justify={"center"}>

      <BMInput id={"username"} type={"text"} label={"UserName:"}/>
   
      <BMInput id={"email"} type={"email"} label={"Email:"}/>
      {/* <BMInput id={"role"} type={"text"} label={"Role:"}/> */}


      <BMInput id={"password"} type={"text"} label={"Password:"}/>
      <BMSelect id={"role"} label={"Role:"}/>
      <Button style={{backgroundColor: "#99BC85", color : "white" }} htmlType="submit">Create Account</Button>
      <Button onClick={()=>navigate("/login")} type="link">Already have an account! Login</Button>

      </Flex>
    </BMForm>
    </Card>
    </Row>
  );
};

export default Register;
