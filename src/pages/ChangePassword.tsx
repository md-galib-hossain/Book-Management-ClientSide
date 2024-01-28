import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useChangepassMutation, useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logout } from '../redux/features/auth/authSlice';

const ChangePassword = () => {
    const dispatch = useAppDispatch();
    const {token : accessToken , user} = useAppSelector(
        (state) => state.auth
      ); 
    const { register, handleSubmit } = useForm();
  
    const [changepass, { error,isLoading }] = useChangepassMutation();
  
    const onSubmit = async (data) => {
      const userInfo = {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      };
    
  console.log(userInfo)
      const res = await changepass(userInfo).unwrap();
  
      dispatch(logout());
    };
    if(isLoading){
        return <div>Loading...</div>
    }
  
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label htmlFor="currentPassword">Current Password: </label>
      <input type="text" id="currentPassword" {...register('currentPassword')} />
    </div>
    <div>
      <label htmlFor="newPassword">New Password: </label>
      <input type="text" id="newPassword" {...register('newPassword')} />
    </div>
    <Button htmlType="submit">Submit</Button>
  </form>
  <h2> {
   user?.email
  }</h2>
 
  </>
  )
}

export default ChangePassword